export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Niafrang</h3>
            <p className="text-gray-300 mb-4">
              Découvrez l'authenticité de la Casamance à travers notre village
              touristique. Vivez des expériences uniques en harmonie avec la
              nature et la culture locale.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>📍 Niafrang, Casamance, Sénégal</p>
              <p>📞 +221 78 840 95 14</p>
              <p>✉️ niafrangtourisme@gmail.com</p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-green-400">
              Suivez-nous
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-green-400 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2026 Niafrang Village Tourisme. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
