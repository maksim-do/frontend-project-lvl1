const limitationOfGeneratedMumbers = 500;

export default (a = limitationOfGeneratedMumbers) => Math.floor(Math.random() * (a + 1));
