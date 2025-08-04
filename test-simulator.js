// Test simple du simulateur Aitenders
import { aitendersSimulatorService } from './server/aitenders-simulator-service.js';

console.log('🧪 Test du Simulateur Aitenders ROI');
console.log('=====================================');

// Créer une session de test
const sessionId = 'test-session-' + Date.now();
console.log(`📝 SessionID: ${sessionId}`);

// Démarrer le simulateur
console.log('\n🚀 Démarrage du simulateur...');
const response = aitendersSimulatorService.startSession(sessionId);
console.log('\n📋 Question 1:');
console.log(response);

// Simuler une réponse utilisateur pour la première question
console.log('\n📝 Simulation réponse utilisateur: "100 petits projets de 5M€"');
const result1 = await aitendersSimulatorService.processAnswer(sessionId, '100 petits projets de 5M€');
console.log('\n📋 Réponse système:');
console.log(result1.message);

// Simuler réponse pour projets moyens
console.log('\n📝 Simulation réponse utilisateur: "50 projets moyens de 20M€"');
const result2 = await aitendersSimulatorService.processAnswer(sessionId, '50 projets moyens de 20M€');
console.log('\n📋 Réponse système:');
console.log(result2.message);

// Simuler réponse pour grands projets
console.log('\n📝 Simulation réponse utilisateur: "5 grands projets de 100M€"');
const result3 = await aitendersSimulatorService.processAnswer(sessionId, '5 grands projets de 100M€');
console.log('\n📋 Réponse système:');
console.log(result3.message);

// Simuler email final
console.log('\n📝 Simulation email: "test@aitenders.com"');
const result4 = await aitendersSimulatorService.processAnswer(sessionId, 'test@aitenders.com');
console.log('\n🎯 Rapport final:');
console.log(result4.message);

console.log('\n✅ Test terminé !');