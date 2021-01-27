import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createQuestionarioVagaEstagio1611743967958 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'questionario',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'candidato',
          type: 'varchar'
        },
        {
          name: 'cpf',
          type: 'varchar'
        },
        {
          name: 'linkedin',
          type: 'varchar'
        },
        {
          name: 'local_preferido',
          type: 'varchar'
        },
        {
          name: 'livros',
          type: 'varchar'
        },
        {
          name: 'esporte',
          type: 'varchar'
        },
        {
          name: 'filme',
          type: 'varchar'
        },
        {
          name: 'serie',
          type: 'varchar'
        },
        {
          name: 'musica',
          type: 'varchar'
        },
        {
          name: 'comida',
          type: 'varchar'
        },
        {
          name: 'pessoa_querida',
          type: 'varchar'
        },
        {
          name: 'qualidades',
          type: 'varchar'
        },
        {
          name: 'defeitos',
          type: 'varchar'
        },
        {
          name: 'horas_vagas',
          type: 'varchar'
        },
        {
          name: 'pessoa_admiravel',
          type: 'varchar'
        },
        {
          name: 'porque_parmais',
          type: 'varchar'
        },
        {
          name: 'porque_contratar_voce',
          type: 'varchar'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('questionario')
  }

}
