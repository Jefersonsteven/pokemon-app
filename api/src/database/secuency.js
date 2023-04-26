async function createSequence(sequelize) {
    const [results, metadata] = await sequelize.query(`
    SELECT EXISTS (
      SELECT 1
      FROM pg_sequences
      WHERE schemaname = 'public' AND sequencename = 'id_pokemon'
    );
  `);

    const sequenceExists = results[0].exists;

    if (!sequenceExists) {
        try {
            await sequelize.query("CREATE SEQUENCE id_pokemon START 1200;");
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = createSequence;
