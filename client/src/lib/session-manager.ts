// Session management utilities for automatic data cleaning
import { apiRequest } from "@/lib/queryClient";

export class SessionManager {
  private static instance: SessionManager;
  private currentIP: string | null = null;
  private currentPage: string = '';
  private isCheckingIP: boolean = false;

  private constructor() {
    this.currentPage = window.location.pathname;
    this.startIPMonitoring();
  }

  public static getInstance(): SessionManager {
    if (!SessionManager.instance) {
      SessionManager.instance = new SessionManager();
    }
    return SessionManager.instance;
  }

  // Get current IP address
  private async getCurrentIP(): Promise<string> {
    try {
      // Use multiple fallback services for IP detection
      const services = [
        'https://api.ipify.org?format=json',
        'https://ipapi.co/json/',
        'https://httpbin.org/ip'
      ];

      for (const service of services) {
        try {
          const response = await fetch(service);
          const data = await response.json();
          return data.ip || data.origin || 'unknown';
        } catch (error) {
          continue; // Try next service
        }
      }
      
      return 'unknown';
    } catch (error) {
      console.warn('Failed to get IP address:', error);
      return 'unknown';
    }
  }

  // Check if IP has changed
  private async checkIPChange(): Promise<boolean> {
    if (this.isCheckingIP) return false;
    
    this.isCheckingIP = true;
    
    try {
      const newIP = await this.getCurrentIP();
      
      if (this.currentIP === null) {
        this.currentIP = newIP;
        return false;
      }
      
      if (this.currentIP !== newIP) {
        console.log(`IP changed from ${this.currentIP} to ${newIP}`);
        this.currentIP = newIP;
        return true;
      }
      
      return false;
    } finally {
      this.isCheckingIP = false;
    }
  }

  // Check if page has changed
  public checkPageChange(): boolean {
    const newPage = window.location.pathname;
    if (this.currentPage !== newPage) {
      console.log(`Page changed from ${this.currentPage} to ${newPage}`);
      this.currentPage = newPage;
      return true;
    }
    return false;
  }

  // Clear chat data
  public async clearChatData(): Promise<void> {
    try {
      await apiRequest("POST", "/api/chat/clear", {});
      console.log('Chat data cleared due to session change');
    } catch (error) {
      console.error('Failed to clear chat data:', error);
    }
  }

  // Start monitoring for changes
  private startIPMonitoring(): void {
    // Check IP every 30 seconds
    setInterval(async () => {
      const ipChanged = await this.checkIPChange();
      if (ipChanged) {
        await this.clearChatData();
      }
    }, 30000);

    // Check page changes on navigation
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;

    history.pushState = (...args) => {
      originalPushState.apply(history, args);
      if (this.checkPageChange()) {
        this.clearChatData();
      }
    };

    history.replaceState = (...args) => {
      originalReplaceState.apply(history, args);
      if (this.checkPageChange()) {
        this.clearChatData();
      }
    };

    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      if (this.checkPageChange()) {
        this.clearChatData();
      }
    });

    // Handle page reload/refresh
    window.addEventListener('beforeunload', () => {
      // Clear on page refresh
      this.clearChatData();
    });
  }

  // Manual trigger for clearing data
  public async triggerClear(): Promise<void> {
    await this.clearChatData();
  }
}

// Initialize session manager
export const sessionManager = SessionManager.getInstance();