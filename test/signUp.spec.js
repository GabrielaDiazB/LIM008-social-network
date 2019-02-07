// Configuración mocks de firebase
const mockOfFirebase = require('firebase-mock');
const mockOfAuth = new mockOfFirebase.MockFirebase();
const mockOfFirestore = mockOfFirebase.MockFirestore();

mockOfFirestore.autoFlush();
mockOfAuth.autoFlush();

global.firebase = mockOfFirebase.MockFirebaseSdk(
    path => (path ? mockdatabase.child(path) : null),
    () => mockOfAuth,
    () => mockOfFirestore
)