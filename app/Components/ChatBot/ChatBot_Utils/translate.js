import { translate } from '@vitalets/google-translate-api';

// Base translations in English
export const baseTranslations = {
  welcome: "Hello! How can I assist you today? You can type 'Product' to see our product list, 'Contact' to get our details, 'Enquiry' to submit a request, 'Catalog' to download our catalog, or 'Support' to speak with an agent.",
  product: "Our Products",
  contact: "Contact Information",
  enquiry: "Submit Enquiry",
  support: "Support Options",
  catalog: "Download Catalog",
  thankYou: "Thank you for your enquiry! Our team will reach out to you shortly.",
  supportHours: "Support Hours: Monday - Friday, 9 AM - 6 PM EST",
  loadingProducts: "Loading products...",
  catalogDesc: "Our comprehensive product catalog with detailed specifications and pricing.",
  supportDesc: "Our support team is available 24/7 to assist you with any questions or issues.",
  notUnderstood: "I'm not sure I understand. You can type 'Product', 'Contact', 'Enquiry', 'Catalog', or 'Support' to get started.",
  name: "Name",
  email: "Email",
  phone: "Phone",
  message: "Message",
  cancel: "Cancel",
  submit: "Submit",
  callNow: "Call Now",
  liveChat: "Live Chat",
  learnMore: "Learn More",
  typeMessage: "Type your message...",
  downloadPDF: "Download PDF",
  enquirySubmitted: "Thank you, {name}! Your enquiry has been submitted. Our team will contact you shortly at {email}.",
  productIntro: "Here are our products:",
  contactInfo: "You can reach us at: support@example.com or call +1-234-567-8900",
  downloadCatalog: "You can download our product catalog here.",
  supportTeam: "Our support team is ready to help you with any questions or issues.",
  submitEnquiry: "Submit an Enquiry",
  noProductsFound: "No products found."
};

// Spanish translations
const spanishTranslations = {
  welcome: "¡Hola! ¿Cómo puedo ayudarte hoy? Puedes escribir 'Producto' para ver nuestra lista de productos, 'Contacto' para obtener nuestros detalles, 'Consulta' para enviar una solicitud, 'Catálogo' para descargar nuestro catálogo o 'Soporte' para hablar con un agente.",
  product: "Nuestros Productos",
  contact: "Información de Contacto",
  enquiry: "Enviar Consulta",
  support: "Opciones de Soporte",
  catalog: "Descargar Catálogo",
  thankYou: "¡Gracias por tu consulta! Nuestro equipo se pondrá en contacto contigo en breve.",
  supportHours: "Horario de atención: Lunes - Viernes, 9 AM - 6 PM EST",
  loadingProducts: "Cargando productos...",
  catalogDesc: "Nuestro catálogo completo de productos con especificaciones detalladas y precios.",
  supportDesc: "Nuestro equipo de soporte está disponible 24/7 para ayudarte con cualquier pregunta o problema.",
  notUnderstood: "No estoy seguro de entender. Puedes escribir 'Producto', 'Contacto', 'Consulta', 'Catálogo' o 'Soporte' para comenzar.",
  name: "Nombre",
  email: "Correo electrónico",
  phone: "Teléfono",
  message: "Mensaje",
  cancel: "Cancelar",
  submit: "Enviar",
  callNow: "Llamar ahora",
  liveChat: "Chat en vivo",
  learnMore: "Saber más",
  typeMessage: "Escribe tu mensaje...",
  downloadPDF: "Descargar PDF",
  enquirySubmitted: "¡Gracias, {name}! Tu consulta ha sido enviada. Nuestro equipo te contactará en breve en {email}.",
  productIntro: "Aquí están nuestros productos:",
  contactInfo: "Puedes contactarnos en: support@example.com o llamar al +1-234-567-8900",
  downloadCatalog: "Puedes descargar nuestro catálogo de productos aquí.",
  supportTeam: "Nuestro equipo de soporte está listo para ayudarte con cualquier pregunta o problema.",
  submitEnquiry: "Enviar una Consulta",
  noProductsFound: "No se encontraron productos."
};

// French translations
const frenchTranslations = {
  welcome: "Bonjour! Comment puis-je vous aider aujourd'hui? Vous pouvez taper 'produits' pour voir notre liste de produits, 'Contact' pour obtenir nos coordonnées, 'Demande' pour soumettre une requête, 'Catalogue' pour télécharger notre catalogue, ou 'Support' pour parler à un agent.",
  product: "Nos Produits",
  contact: "Informations de Contact",
  enquiry: "Soumettre une Demande",
  support: "Options de Support",
  catalog: "Télécharger le Catalogue",
  thankYou: "Merci pour votre demande! Notre équipe vous contactera sous peu.",
  supportHours: "Heures de support: Lundi - Vendredi, 9h - 18h EST",
  loadingProducts: "Chargement des produits...",
  catalogDesc: "Notre catalogue complet de produits avec des spécifications détaillées et des prix.",
  supportDesc: "Notre équipe de support est disponible 24/7 pour vous aider avec toutes vos questions ou problèmes.",
  notUnderstood: "Je ne suis pas sûr de comprendre. Vous pouvez taper 'Produit', 'Contact', 'Demande', 'Catalogue', ou 'Support' pour commencer.",
  name: "Nom",
  email: "Email",
  phone: "Téléphone",
  message: "Message",
  cancel: "Annuler",
  submit: "Soumettre",
  callNow: "Appeler maintenant",
  liveChat: "Chat en direct",
  learnMore: "En savoir plus",
  typeMessage: "Tapez votre message...",
  downloadPDF: "Télécharger le PDF",
  enquirySubmitted: "Merci, {name}! Votre demande a été soumise. Notre équipe vous contactera bientôt à {email}.",
  productIntro: "Voici nos produits:",
  contactInfo: "Vous pouvez nous joindre à: support@example.com ou appeler le +1-234-567-8900",
  downloadCatalog: "Vous pouvez télécharger notre catalogue de produits ici.",
  supportTeam: "Notre équipe de support est prête à vous aider avec toutes vos questions ou problèmes.",
  submitEnquiry: "Soumettre une Demande",
  noProductsFound: "Aucun produit trouvé."
};

// German translations
const germanTranslations = {
  welcome: "Hallo! Wie kann ich Ihnen heute helfen? Sie können 'Produkt' eingeben, um unsere Produktliste zu sehen, 'Kontakt' für unsere Details, 'Anfrage' um eine Anfrage zu stellen, 'Katalog' um unseren Katalog herunterzuladen oder 'Support' um mit einem Mitarbeiter zu sprechen.",
  product: "Unsere Produkte",
  contact: "Kontaktinformationen",
  enquiry: "Anfrage senden",
  support: "Support-Optionen",
  catalog: "Katalog herunterladen",
  thankYou: "Vielen Dank für Ihre Anfrage! Unser Team wird sich in Kürze bei Ihnen melden.",
  supportHours: "Support-Zeiten: Montag - Freitag, 9 - 18 Uhr EST",
  loadingProducts: "Produkte werden geladen...",
  catalogDesc: "Unser umfassender Produktkatalog mit detaillierten Spezifikationen und Preisen.",
  supportDesc: "Unser Support-Team steht Ihnen rund um die Uhr zur Verfügung, um Ihnen bei Fragen oder Problemen zu helfen.",
  notUnderstood: "Ich bin mir nicht sicher, ob ich verstehe. Sie können 'Produkt', 'Kontakt', 'Anfrage', 'Katalog' oder 'Support' eingeben, um zu beginnen.",
  name: "Name",
  email: "E-Mail",
  phone: "Telefon",
  message: "Nachricht",
  cancel: "Abbrechen",
  submit: "Absenden",
  callNow: "Jetzt anrufen",
  liveChat: "Live-Chat",
  learnMore: "Mehr erfahren",
  typeMessage: "Geben Sie Ihre Nachricht ein...",
  downloadPDF: "PDF herunterladen",
  enquirySubmitted: "Vielen Dank, {name}! Ihre Anfrage wurde übermittelt. Unser Team wird Sie in Kürze unter {email} kontaktieren.",
  productIntro: "Hier sind unsere Produkte:",
  contactInfo: "Sie können uns erreichen unter: support@example.com oder rufen Sie an unter +1-234-567-8900",
  downloadCatalog: "Sie können unseren Produktkatalog hier herunterladen.",
  supportTeam: "Unser Support-Team steht bereit, um Ihnen bei allen Fragen oder Problemen zu helfen.",
  submitEnquiry: "Eine Anfrage stellen",
  noProductsFound: "Keine Produkte gefunden."
};

// Hindi translations
const hindiTranslations = {
  welcome: "नमस्ते! मैं आज आपकी कैसे मदद कर सकता हूं? आप हमारी उत्पाद सूची देखने के लिए 'product', हमारा विवरण प्राप्त करने के लिए 'contact', अनुरोध भेजने के लिए 'enquiry', हमारा कैटलॉग डाउनलोड करने के लिए 'catalog', या एजेंट से बात करने के लिए 'support' टाइप कर सकते हैं।",
  product: "हमारे उत्पाद",
  contact: "संपर्क जानकारी",
  enquiry: "पूछताछ भेजें",
  support: "सहायता विकल्प",
  catalog: "कैटलॉग डाउनलोड करें",
  thankYou: "आपकी पूछताछ के लिए धन्यवाद! हमारी टीम जल्द ही आपसे संपर्क करेगी।",
  supportHours: "सहायता समय: सोमवार - शुक्रवार, सुबह 9 बजे - शाम 6 बजे EST",
  loadingProducts: "उत्पाद लोड हो रहे हैं...",
  catalogDesc: "विस्तृत विनिर्देशों और मूल्य निर्धारण के साथ हमारा व्यापक उत्पाद कैटलॉग।",
  supportDesc: "हमारी सहायता टीम आपके किसी भी प्रश्न या समस्या में मदद के लिए 24/7 उपलब्ध है।",
  notUnderstood: "मैं समझ नहीं पा रहा हूं। आप शुरू करने के लिए 'product', 'contact', 'enquiry', 'catalog', या 'support' टाइप कर सकते हैं।",
  name: "नाम",
  email: "ईमेल",
  phone: "फोन",
  message: "संदेश",
  cancel: "रद्द करें",
  submit: "भेजें",
  callNow: "अभी कॉल करें",
  liveChat: "लाइव चैट",
  learnMore: "और जानें",
  typeMessage: "अपना संदेश टाइप करें...",
  downloadPDF: "PDF डाउनलोड करें",
  enquirySubmitted: "धन्यवाद, {name}! आपकी पूछताछ भेज दी गई है। हमारी टीम जल्द ही {email} पर आपसे संपर्क करेगी।",
  productIntro: "यहाँ हमारे उत्पाद हैं:",
  contactInfo: "आप हमसे यहाँ संपर्क कर सकते हैं: support@example.com या कॉल करें +1-234-567-8900",
  downloadCatalog: "आप यहाँ से हमारा उत्पाद कैटलॉग डाउनलोड कर सकते हैं।",
  supportTeam: "हमारी सहायता टीम आपके किसी भी प्रश्न या समस्या में मदद के लिए तैयार है।",
  submitEnquiry: "पूछताछ भेजें",
  noProductsFound: "कोई उत्पाद नहीं मिला।"
};
// Telugu translations
const teluguTranslations = {
  welcome: "నమస్కారం! నేను మీకు ఈరోజు ఎలా సహాయం చేయగలను? మీరు మా ఉత్పత్తుల జాబితాను చూడటానికి 'product', మా వివరాలను పొందడానికి 'contact', అభ్యర్థనను సమర్పించడానికి 'enquiry', మా కేటలాగ్‌ను డౌన్‌లోడ్ చేయడానికి 'catalog', లేదా ఏజెంట్‌తో మాట్లాడటానికి 'support' అని టైప్ చేయవచ్చు.",
  product: "మా ఉత్పత్తులు",
  contact: "సంప్రదింపు సమాచారం",
  enquiry: "విచారణ సమర్పించండి",
  support: "మద్దతు ఎంపికలు",
  catalog: "కేటలాగ్ డౌన్‌లోడ్ చేయండి",
  thankYou: "మీ విచారణకు ధన్యవాదాలు! మా బృందం త్వరలో మిమ్మల్ని సంప్రదిస్తుంది.",
  supportHours: "మద్దతు గంటలు: సోమవారం - శుక్రవారం, ఉదయం 9 గంటల నుండి సాయంత్రం 6 గంటల వరకు EST",
  loadingProducts: "ఉత్పత్తులను లోడ్ చేస్తోంది...",
  catalogDesc: "వివరణాత్మక స్పెసిఫికేషన్లు మరియు ధరలతో మా సమగ్ర ఉత్పత్తి కేటలాగ్.",
  supportDesc: "మా మద్దతు బృందం మీకు ఏవైనా ప్రశ్నలు లేదా సమస్యలలో సహాయపడటానికి 24/7 అందుబాటులో ఉంది.",
  notUnderstood: "నేను అర్థం చేసుకున్నాను అని నాకు ఖచ్చితంగా తెలియదు. మీరు ప్రారంభించడానికి 'ఉత్పత్తి', 'సంప్రదింపు', 'విచారణ', 'కేటలాగ్', లేదా 'మద్దతు' అని టైప్ చేయవచ్చు.",
  name: "పేరు",
  email: "ఇమెయిల్",
  phone: "ఫోన్",
  message: "సందేశం",
  cancel: "రద్దు చేయండి",
  submit: "సమర్పించండి",
  callNow: "ఇప్పుడు కాల్ చేయండి",
  liveChat: "లైవ్ చాట్",
  learnMore: "మరింత తెలుసుకోండి",
  typeMessage: "మీ సందేశాన్ని టైప్ చేయండి...",
  downloadPDF: "PDF డౌన్‌లోడ్ చేయండి",
  enquirySubmitted: "ధన్యవాదాలు, {name}! మీ విచారణ సమర్పించబడింది. మా బృందం త్వరలో {email} వద్ద మిమ్మల్ని సంప్రదిస్తుంది.",
  productIntro: "ఇవి మా ఉత్పత్తులు:",
  contactInfo: "మీరు మాకు సంప్రదించవచ్చు: support@example.com లేదా +1-234-567-8900 కి కాల్ చేయండి",
  downloadCatalog: "మీరు మా ఉత్పత్తి కేటలాగ్‌ను ఇక్కడ డౌన్‌లోడ్ చేయవచ్చు.",
  supportTeam: "మా మద్దతు బృందం మీకు ఏవైనా ప్రశ్నలు లేదా సమస్యలలో సహాయపడటానికి సిద్ధంగా ఉంది.",
  submitEnquiry: "విచారణ సమర్పించండి",
  noProductsFound: "ఉత్పత్తులు కనుగొనబడలేదు."
};

// Tamil translations
const tamilTranslations = {
  welcome: "வணக்கம்! இன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்? எங்கள் தயாரிப்பு பட்டியலைக் காண 'product', எங்கள் விவரங்களைப் பெற 'contact', கோரிக்கையை சமர்ப்பிக்க 'enquiry', எங்கள் கேட்டலாக்கை பதிவிறக்க 'catalog', அல்லது ஒரு முகவருடன் பேச 'support' என்று தட்டச்சு செய்யலாம்.",
  product: "எங்கள் தயாரிப்புகள்",
  contact: "தொடர்பு தகவல்",
  enquiry: "விசாரணை சமர்ப்பிக்கவும்",
  support: "ஆதரவு விருப்பங்கள்",
  catalog: "கேட்டலாக்கை பதிவிறக்கவும்",
  thankYou: "உங்கள் விசாரணைக்கு நன்றி! எங்கள் குழு விரைவில் உங்களைத் தொடர்பு கொள்ளும்.",
  supportHours: "ஆதரவு நேரங்கள்: திங்கள் - வெள்ளி, காலை 9 மணி - மாலை 6 மணி EST",
  loadingProducts: "தயாரிப்புகளை ஏற்றுகிறது...",
  catalogDesc: "விரிவான விவரக்குறிப்புகள் மற்றும் விலை நிர்ணயத்துடன் எங்களின் விரிவான தயாரிப்பு கேட்டலாக்.",
  supportDesc: "எங்கள் ஆதரவு குழு உங்கள் கேள்விகள் அல்லது சிக்கல்களுக்கு உதவ 24/7 கிடைக்கிறது.",
  notUnderstood: "நான் புரிந்து கொண்டேன் என்று எனக்கு உறுதியாகத் தெரியவில்லை. தொடங்க நீங்கள் 'தயாரிப்பு', 'தொடர்பு', 'விசாரணை', 'கேட்டலாக்', அல்லது 'ஆதரவு' என்று தட்டச்சு செய்யலாம்.",
  name: "பெயர்",
  email: "மின்னஞ்சல்",
  phone: "தொலைபேசி",
  message: "செய்தி",
  cancel: "ரத்து செய்",
  submit: "சமர்ப்பி",
  callNow: "இப்போது அழைக்கவும்",
  liveChat: "நேரடி அரட்டை",
  learnMore: "மேலும் அறிய",
  typeMessage: "உங்கள் செய்தியை தட்டச்சு செய்யவும்...",
  downloadPDF: "PDF ஐ பதிவிறக்கவும்",
  enquirySubmitted: "நன்றி, {name}! உங்கள் விசாரணை சமர்ப்பிக்கப்பட்டது. எங்கள் குழு விரைவில் {email} இல் உங்களைத் தொடர்பு கொள்ளும்.",
  productIntro: "இதோ எங்கள் தயாரிப்புகள்:",
  contactInfo: "நீங்கள் எங்களை தொடர்பு கொள்ளலாம்: support@example.com அல்லது +1-234-567-8900 என்ற எண்ணில் அழைக்கவும்",
  downloadCatalog: "எங்கள் தயாரிப்பு கேட்டலாக்கை இங்கே பதிவிறக்கலாம்.",
  supportTeam: "எங்கள் ஆதரவு குழு உங்கள் கேள்விகள் அல்லது சிக்கல்களுக்கு உதவ தயாராக உள்ளது.",
  submitEnquiry: "விசாரணையைச் சமர்ப்பிக்கவும்",
  noProductsFound: "தயாரிப்புகள் எதுவும் கிடைக்கவில்லை."
};

// Kannada translations
const kannadaTranslations = {
  welcome: "ನಮಸ್ಕಾರ! ನಾನು ಇಂದು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು? ನಮ್ಮ ಉತ್ಪನ್ನ ಪಟ್ಟಿಯನ್ನು ನೋಡಲು 'product', ನಮ್ಮ ವಿವರಗಳನ್ನು ಪಡೆಯಲು 'contact', ವಿನಂತಿಯನ್ನು ಸಲ್ಲಿಸಲು 'enquiry', ನಮ್ಮ ಕ್ಯಾಟಲಾಗ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಲು 'catalog', ಅಥವಾ ಏಜೆಂಟ್‌ನೊಂದಿಗೆ ಮಾತನಾಡಲು 'support' ಎಂದು ಟೈಪ್ ಮಾಡಬಹುದು.",
  product: "ನಮ್ಮ ಉತ್ಪನ್ನಗಳು",
  contact: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
  enquiry: "ವಿಚಾರಣೆ ಸಲ್ಲಿಸಿ",
  support: "ಬೆಂಬಲ ಆಯ್ಕೆಗಳು",
  catalog: "ಕ್ಯಾಟಲಾಗ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
  thankYou: "ನಿಮ್ಮ ವಿಚಾರಣೆಗೆ ಧನ್ಯವಾದಗಳು! ನಮ್ಮ ತಂಡವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
  supportHours: "ಬೆಂಬಲ ಸಮಯ: ಸೋಮವಾರ - ಶುಕ್ರವಾರ, ಬೆಳಿಗ್ಗೆ 9 - ಸಂಜೆ 6 EST",
  loadingProducts: "ಉತ್ಪನ್ನಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
  catalogDesc: "ವಿವರವಾದ ಸ್ಪೆಸಿಫಿಕೇಶನ್‌ಗಳು ಮತ್ತು ಬೆಲೆಗಳೊಂದಿಗೆ ನಮ್ಮ ಸಮಗ್ರ ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್.",
  supportDesc: "ನಮ್ಮ ಬೆಂಬಲ ತಂಡವು ನಿಮ್ಮ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಸಮಸ್ಯೆಗಳಿಗೆ ಸಹಾಯ ಮಾಡಲು 24/7 ಲಭ್ಯವಿದೆ.",
  notUnderstood: "ನಾನು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇನೆ ಎಂದು ನನಗೆ ಖಚಿತವಾಗಿ ಗೊತ್ತಿಲ್ಲ. ಪ್ರಾರಂಭಿಸಲು ನೀವು 'product', 'contact', 'enquiry', 'catalog', ಅಥವಾ 'support' ಎಂದು ಟೈಪ್ ಮಾಡಬಹುದು.",
  name: "ಹೆಸರು",
  email: "ಇಮೇಲ್",
  phone: "ಫೋನ್",
  message: "ಸಂದೇಶ",
  cancel: "ರದ್ದುಮಾಡಿ",
  submit: "ಸಲ್ಲಿಸಿ",
  callNow: "ಈಗ ಕರೆ ಮಾಡಿ",
  liveChat: "ಲೈವ್ ಚಾಟ್",
  learnMore: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
  typeMessage: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...",
  downloadPDF: "PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
  enquirySubmitted: "ಧನ್ಯವಾದಗಳು, {name}! ನಿಮ್ಮ ವಿಚಾರಣೆಯನ್ನು ಸಲ್ಲಿಸಲಾಗಿದೆ. ನಮ್ಮ ತಂಡವು ಶೀಘ್ರದಲ್ಲೇ {email} ನಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
  productIntro: "ಇಲ್ಲಿ ನಮ್ಮ ಉತ್ಪನ್ನಗಳಿವೆ:",
  contactInfo: "ನೀವು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು: support@example.com ಅಥವಾ +1-234-567-8900 ಗೆ ಕರೆ ಮಾಡಿ",
  downloadCatalog: "ನೀವು ನಮ್ಮ ಉತ್ಪನ್ನ ಕ್ಯಾಟಲಾಗ್ ಅನ್ನು ಇಲ್ಲಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಬಹುದು.",
  supportTeam: "ನಮ್ಮ ಬೆಂಬಲ ತಂಡವು ನಿಮ್ಮ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಸಮಸ್ಯೆಗಳಿಗೆ ಸಹಾಯ ಮಾಡಲು ಸಿದ್ಧವಾಗಿದೆ.",
  submitEnquiry: "ವಿಚಾರಣೆಯನ್ನು ಸಲ್ಲಿಸಿ",
  noProductsFound: "യಾವುದೇ ಉತ್ಪನ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ."
};

// Malayalam translations
const malayalamTranslations = {
  welcome: "നമസ്കാരം! ഇന്ന് എനിക്ക് നിങ്ങളെ എങ്ങനെ സഹായിക്കാൻ കഴിയും? ഞങ്ങളുടെ ഉൽപ്പന്ന ലിസ്റ്റ് കാണാൻ 'enquiry', ഞങ്ങളുടെ വിശദാംശങ്ങൾ ലഭിക്കാൻ 'contact', അന്വേഷണം സമർപ്പിക്കാൻ 'enquiry', ഞങ്ങളുടെ കാറ്റലോഗ് ഡൗൺലോഡ് ചെയ്യാൻ 'catalog', അല്ലെങ്കിൽ ഒരു ഏജന്റുമായി സംസാരിക്കാൻ 'support' എന്ന് ടൈപ്പ് ചെയ്യാം.",
  product: "ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ",
  contact: "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
  enquiry: "അന്വേഷണം സമർപ്പിക്കുക",
  support: "സപ്പോർട്ട് ഓപ്ഷനുകൾ",
  catalog: "കാറ്റലോഗ് ഡൗൺലോഡ് ചെയ്യുക",
  thankYou: "നിങ്ങളുടെ അന്വേഷണത്തിന് നന്ദി! ഞങ്ങളുടെ ടീം ഉടൻ നിങ്ങളെ ബന്ധപ്പെടും.",
  supportHours: "സപ്പോർട്ട് സമയം: തിങ്കൾ - വെള്ളി, രാവിലെ 9 മുതൽ വൈകുന്നേരം 6 വരെ EST",
  loadingProducts: "ഉൽപ്പന്നങ്ങൾ ലോഡ് ചെയ്യുന്നു...",
  catalogDesc: "വിശദമായ സ്പെസിഫിക്കേഷനുകളും വിലകളും ഉള്ള ഞങ്ങളുടെ സമഗ്രമായ ഉൽപ്പന്ന കാറ്റലോഗ്.",
  supportDesc: "ഞങ്ങളുടെ സപ്പോർട്ട് ടീം നിങ്ങളുടെ ചോദ്യങ്ങൾക്കോ പ്രശ്നങ്ങൾക്കോ സഹായിക്കാൻ 24/7 ലഭ്യമാണ്.",
  notUnderstood: "എനിക്ക് മനസ്സിലായെന്ന് ഉറപ്പില്ല. ആരംഭിക്കാൻ നിങ്ങൾക്ക് 'ഉൽപ്പന്നം', 'കോൺടാക്റ്റ്', 'എൻക്വയറി', 'കാറ്റലോഗ്', അല്ലെങ്കിൽ 'സപ്പോർട്ട്' എന്ന് ടൈപ്പ് ചെയ്യാം.",
  name: "പേര്",
  email: "ഇമെയിൽ",
  phone: "ഫോൺ",
  message: "സന്ദേശം",
  cancel: "റദ്ദാക്കുക",
  submit: "സമർപ്പിക്കുക",
  callNow: "ഇപ്പോൾ വിളിക്കുക",
  liveChat: "ലൈവ് ചാറ്റ്",
  learnMore: "കൂടുതൽ അറിയുക",
  typeMessage: "നിങ്ങളുടെ സന്ദേശം ടൈപ്പ് ചെയ്യുക...",
  downloadPDF: "PDF ഡൗൺലോഡ് ചെയ്യുക",
  enquirySubmitted: "നന്ദി, {name}! നിങ്ങളുടെ അന്വേഷണം സമർപ്പിച്ചു. ഞങ്ങളുടെ ടീം ഉടൻ {email} ൽ നിങ്ങളെ ബന്ധപ്പെടും.",
  productIntro: "ഇതാ ഞങ്ങളുടെ ഉൽപ്പന്നങ്ങൾ:",
  contactInfo: "നിങ്ങൾക്ക് ഞങ്ങളെ ബന്ധപ്പെടാം: support@example.com അല്ലെങ്കിൽ +1-234-567-8900 എന്ന നമ്പറിൽ വിളിക്കുക",
  downloadCatalog: "ഇവിടെ നിന്ന് നിങ്ങൾക്ക് ഞങ്ങളുടെ ഉൽപ്പന്ന കാറ്റലോഗ് ഡൗൺലോഡ് ചെയ്യാം.",
  supportTeam: "ഞങ്ങളുടെ സപ്പോർട്ട് ടീം നിങ്ങളുടെ ചോദ്യങ്ങൾക്കോ പ്രശ്നങ്ങൾക്കോ സഹായിക്കാൻ തയ്യാറാണ്.",
  submitEnquiry: "അന്വേഷണം സമർപ്പിക്കുക",
  noProductsFound: "ഉൽപ്പന്നങ്ങളൊന്നും കണ്ടെത്തിയില്ല."
};

export {
  teluguTranslations,
  tamilTranslations,
  kannadaTranslations,
  malayalamTranslations
};
// All translations combined
const hardcodedTranslations = {
  en: baseTranslations,
  es: spanishTranslations,
  fr: frenchTranslations,
  de: germanTranslations,
  hi: hindiTranslations,
  te: teluguTranslations,
  ta: tamilTranslations,
  kn: kannadaTranslations,
  ml: malayalamTranslations
};

// Cache for translations to avoid unnecessary API calls
const translationCache = {
  ...hardcodedTranslations
};

// Debug flag - set to true to see more detailed logs
const DEBUG = true;

/**
 * Debug logger
 * @param {string} message - Message to log
 * @param {any} data - Optional data to log
 */
const debugLog = (message, data) => {
  if (DEBUG) {
    if (data) {
      console.log(`[Translate] ${message}`, data);
    } else {
      console.log(`[Translate] ${message}`);
    }
  }
};

/**
 * Gets all translations for a specific language
 * @param {string} lang - Language code
 * @returns {Promise<Object>} - Object with all translations
 */
export const getTranslations = async (lang) => {
  debugLog(`Getting translations for language: ${lang}`);
  
  // Return cached translations if available
  if (translationCache[lang]) {
    debugLog(`Using cached translations for ${lang}`);
    return translationCache[lang];
  }

  // If English, return base translations
  if (lang === 'en') {
    debugLog('Using base English translations');
    return baseTranslations;
  }

  // Fallback to English if language not supported
  debugLog(`Language ${lang} not found in hardcoded translations, falling back to English`);
  return baseTranslations;
};

/**
 * Gets a specific translation key for a language
 * @param {string} key - Translation key
 * @param {string} lang - Language code
 * @param {Object} params - Parameters to replace in the translation (e.g., {name: 'John'})
 * @returns {Promise<string>} - Translated text
 */
export const getTranslation = async (key, lang, params = {}) => {
  if (!key) {
    console.error('Translation key is undefined or empty');
    return '';
  }
  
  try {
    // Get all translations for the language
    const translations = await getTranslations(lang);
    
    // Get the translation or fallback to English
    let text = translations[key] || baseTranslations[key] || key;
    
    // Replace parameters in the text
    if (params && Object.keys(params).length > 0) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, value);
      });
    }
    
    debugLog(`Translation for ${key} in ${lang}: ${text}`);
    return text;
  } catch (error) {
    console.error(`Error getting translation for key ${key}:`, error);
    return key; // Return the key as fallback
  }
};

/**
 * Supported languages
 */
export const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  // { code: 'it', name: 'Italian' },
  // { code: 'pt', name: 'Portuguese' },
  // { code: 'ru', name: 'Russian' },
  // { code: 'ja', name: 'Japanese' },
  // { code: 'zh', name: 'Chinese' },
  // { code: 'ar', name: 'Arabic' },
  { code: 'hi', name: 'Hindi' },
  { code: 'te', name: 'Telugu' },
  { code: 'ta', name: 'Tamil' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ml', name: 'Malayalam' }


];
