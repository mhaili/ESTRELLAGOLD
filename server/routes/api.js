const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Informations du café
const cafeInfo = {
  name: 'Estrella Gold',
  address: 'lot charaf n362 el manar, Marrakesh 40090, Maroc',
  phone: '+212 718-853356',
  coordinates: {
    lat: 31.6295,
    lng: -7.9811
  },
  hours: {
    monday: { open: '08:00', close: '23:00' },
    tuesday: { open: '08:00', close: '23:00' },
    wednesday: { open: '08:00', close: '23:00' },
    thursday: { open: '08:00', close: '23:00' },
    friday: { open: '08:00', close: '23:00' },
    saturday: { open: '08:00', close: '23:00' },
    sunday: { open: '08:00', close: '23:00' }
  },
  priceRange: '1-50 MAD',
  rating: 4.1,
  reviewCount: 108,
  description: 'Un café moderne et accueillant au cœur de Marrakech, offrant une atmosphère calme et propre avec un service professionnel. L\'endroit parfait pour se détendre et prendre de l\'énergie positive.',
  features: [
    'Wi-Fi gratuit',
    'Terrasse',
    'Climatisation',
    'Service rapide',
    'Ambiance moderne',
    'Parking disponible'
  ]
};

// GET - Informations du café
router.get('/cafe-info', (req, res) => {
  res.json({
    success: true,
    data: cafeInfo
  });
});

// GET - Menu du café
router.get('/menu', (req, res) => {
  const menu = {
    categories: [
      {
        name: 'Cafés',
        items: [
          { name: 'Espresso', price: '8 MAD', description: 'Café italien traditionnel' },
          { name: 'Cappuccino', price: '12 MAD', description: 'Espresso avec mousse de lait' },
          { name: 'Café Latte', price: '15 MAD', description: 'Café au lait onctueux' },
          { name: 'Café Américain', price: '10 MAD', description: 'Café allongé' },
          { name: 'Café Marocain', price: '8 MAD', description: 'Café traditionnel aux épices' }
        ]
      },
      {
        name: 'Thés & Infusions',
        items: [
          { name: 'Thé à la Menthe', price: '8 MAD', description: 'Thé traditionnel marocain' },
          { name: 'Thé Earl Grey', price: '10 MAD', description: 'Thé noir bergamote' },
          { name: 'Infusion Verveine', price: '8 MAD', description: 'Infusion relaxante' },
          { name: 'Thé Vert', price: '8 MAD', description: 'Thé vert nature' }
        ]
      },
      {
        name: 'Boissons Fraîches',
        items: [
          { name: 'Jus d\'Orange Frais', price: '15 MAD', description: 'Orange pressée' },
          { name: 'Smoothie Fruits', price: '20 MAD', description: 'Mélange de fruits frais' },
          { name: 'Limonade', price: '12 MAD', description: 'Citron pressé' },
          { name: 'Coca Cola', price: '8 MAD', description: 'Boisson gazeuse' }
        ]
      },
      {
        name: 'Pâtisseries',
        items: [
          { name: 'Croissant', price: '5 MAD', description: 'Viennoiserie française' },
          { name: 'Pain au Chocolat', price: '6 MAD', description: 'Viennoiserie au chocolat' },
          { name: 'Muffin', price: '8 MAD', description: 'Muffin maison' },
          { name: 'Tarte aux Fruits', price: '12 MAD', description: 'Tarte saisonnière' }
        ]
      }
    ]
  };

  res.json({
    success: true,
    data: menu
  });
});

// POST - Contact (avec validation)
router.post('/contact', [
  body('name')
    .isLength({ min: 2, max: 50 })
    .withMessage('Le nom doit contenir entre 2 et 50 caractères')
    .matches(/^[a-zA-ZÀ-ÿ\s]+$/)
    .withMessage('Le nom ne doit contenir que des lettres'),
  body('email')
    .isEmail()
    .withMessage('Email invalide')
    .normalizeEmail(),
  body('phone')
    .optional()
    .matches(/^(\+212|0)[5-7][0-9]{8}$/)
    .withMessage('Numéro de téléphone marocain invalide'),
  body('message')
    .isLength({ min: 10, max: 500 })
    .withMessage('Le message doit contenir entre 10 et 500 caractères')
    .trim()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array()
    });
  }

  const { name, email, phone, message } = req.body;
  
  // Ici vous pourriez envoyer un email, sauvegarder en base de données, etc.
  console.log('Nouveau message de contact:', { name, email, phone, message });

  res.json({
    success: true,
    message: 'Votre message a été envoyé avec succès. Nous vous recontacterons bientôt!'
  });
});

// GET - Avis clients (simulation)
router.get('/reviews', (req, res) => {
  const reviews = [
    {
      id: 1,
      author: 'Othmane',
      rating: 5,
      date: '2024-06-14',
      comment: 'Très bonne café pour moi je suis devenu addicte de partir là-bas, pour se soulager et prendre d\'énergie positive. Très bon service et très bon design.'
    },
    {
      id: 2,
      author: 'Yacinovic',
      rating: 5,
      date: '2024-09-14',
      comment: 'Bon café calm et propre'
    },
    {
      id: 3,
      author: 'Mehdi Benaarous',
      rating: 5,
      date: '2023-10-14',
      comment: 'Un bar moderne, propre et très bien tenu. Le responsable et la serveuse sont d\'une gentillesse et d\'un professionnalisme juste parfait.'
    }
  ];

  res.json({
    success: true,
    data: reviews
  });
});

module.exports = router;