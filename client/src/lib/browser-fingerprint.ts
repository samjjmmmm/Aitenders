// Browser fingerprinting utilities for unique user identification
export class BrowserFingerprint {
  private static fingerprint: string | null = null;

  // Generate a unique browser fingerprint
  public static async generateFingerprint(): Promise<string> {
    if (this.fingerprint) {
      return this.fingerprint;
    }

    const components: string[] = [];

    // Basic browser info
    components.push(navigator.userAgent || 'unknown');
    components.push(navigator.language || 'unknown');
    components.push(navigator.platform || 'unknown');
    components.push(navigator.cookieEnabled ? 'cookies-enabled' : 'cookies-disabled');

    // Screen info
    components.push(`${screen.width}x${screen.height}`);
    components.push(`${screen.colorDepth}`);
    components.push(`${new Date().getTimezoneOffset()}`);

    // Additional unique identifiers
    components.push(navigator.hardwareConcurrency?.toString() || 'unknown');
    components.push((navigator as any).deviceMemory?.toString() || 'unknown');
    components.push(navigator.maxTouchPoints?.toString() || '0');

    // Canvas fingerprinting (basic)
    try {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Browser fingerprint test 🔍', 2, 2);
        components.push(canvas.toDataURL().slice(-50)); // Last 50 chars for brevity
      }
    } catch (e) {
      components.push('canvas-error');
    }

    // WebGL info
    try {
      const gl = document.createElement('canvas').getContext('webgl');
      if (gl) {
        const renderer = gl.getParameter(gl.RENDERER) || 'unknown';
        const vendor = gl.getParameter(gl.VENDOR) || 'unknown';
        components.push(`${vendor}-${renderer}`.slice(0, 50));
      }
    } catch (e) {
      components.push('webgl-error');
    }

    // Generate session timestamp to ensure uniqueness per session
    const sessionTimestamp = Date.now();
    components.push(sessionTimestamp.toString());

    // Create hash from all components
    const fingerprint = await this.hashString(components.join('|'));
    this.fingerprint = fingerprint;
    
    // Store in sessionStorage (cleared on tab close)
    sessionStorage.setItem('browserFingerprint', fingerprint);
    
    return fingerprint;
  }

  // Get stored fingerprint or generate new one
  public static async getFingerprint(): Promise<string> {
    // Check if we have it in memory
    if (this.fingerprint) {
      return this.fingerprint;
    }

    // Check sessionStorage
    const stored = sessionStorage.getItem('browserFingerprint');
    if (stored) {
      this.fingerprint = stored;
      return stored;
    }

    // Generate new one
    return await this.generateFingerprint();
  }

  // Simple hash function for fingerprint
  private static async hashString(str: string): Promise<string> {
    if (crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(str);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
    } else {
      // Fallback simple hash for older browsers
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32-bit integer
      }
      return Math.abs(hash).toString(16).padStart(8, '0');
    }
  }

  // Clear fingerprint (for testing)
  public static clearFingerprint(): void {
    this.fingerprint = null;
    sessionStorage.removeItem('browserFingerprint');
  }
}