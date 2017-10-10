export default {
  getState: jest.fn(() => ({
    firstName: 'Jest',
    lastName: 'Test',
    talk: "I can't talk",
  })),
};
