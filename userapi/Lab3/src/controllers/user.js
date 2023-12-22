// Exemple de données utilisateur pour les tests
const users = [
  { username: 'john_doe', name: 'John Doe', email: 'john@example.com' },
  // Ajoutez d'autres utilisateurs si nécessaire
];

const userController = {
  getUserByUsername: (username) => {
      // Recherchez l'utilisateur dans la liste
      const user = users.find((u) => u.username === username);
      return user || null;
  },
};

module.exports = userController;
