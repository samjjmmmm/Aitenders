import Header from "@/components/header";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Privacy Policy Content */}
      <section className="py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-aitenders-dark-blue mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons à protéger vos données personnelles et à respecter votre vie privée.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 - Collecte des données */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                1. Collecte des données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous collectons uniquement les données nécessaires au fonctionnement de notre plateforme :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Informations de contact (nom, email, téléphone)</li>
                <li>Données d'utilisation de la plateforme</li>
                <li>Préférences et paramètres utilisateur</li>
                <li>Données techniques de connexion</li>
              </ul>
            </div>

            {/* Section 2 - Utilisation des données */}
            <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                2. Utilisation des données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vos données sont utilisées exclusivement pour :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Fournir nos services d'analyse de marchés publics</li>
                <li>Améliorer l'expérience utilisateur</li>
                <li>Assurer la sécurité de la plateforme</li>
                <li>Communication liée au service</li>
              </ul>
            </div>

            {/* Section 3 - Protection des données */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                3. Protection et sécurité
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous mettons en œuvre des mesures de sécurité strictes :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Surveillance continue de la sécurité</li>
                <li>Conformité RGPD</li>
              </ul>
            </div>

            {/* Section 4 - Vos droits */}
            <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                4. Vos droits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
            </div>

            {/* Section 5 - Cookies */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                5. Cookies et technologies similaires
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre site utilise des cookies pour améliorer votre expérience :
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Cookies essentiels au fonctionnement</li>
                <li>Cookies d'analyse et de performance</li>
                <li>Cookies de préférences utilisateur</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur.
              </p>
            </div>

            {/* Section 6 - Contact */}
            <div className="bg-white border border-aitenders-medium-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                6. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits :
              </p>
              <div className="bg-aitenders-light-blue rounded-lg p-4">
                <p className="text-aitenders-dark-blue font-medium">
                  Email : privacy@aitenders.com
                </p>
                <p className="text-aitenders-dark-blue font-medium">
                  Adresse : [Adresse de l'entreprise]
                </p>
              </div>
            </div>

            {/* Section 7 - Modifications */}
            <div className="bg-aitenders-light-blue rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-aitenders-dark-blue mb-4">
                7. Modifications de cette politique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Cette politique de confidentialité peut être mise à jour périodiquement. 
                Nous vous informerons de tout changement significatif par email ou via 
                une notification sur notre plateforme.
              </p>
              <p className="text-sm text-gray-600 mt-4">
                Dernière mise à jour : 18 août 2025
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}