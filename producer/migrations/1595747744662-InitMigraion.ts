import {MigrationInterface, QueryRunner} from "typeorm";

export class InitMigraion1595747744662 implements MigrationInterface {
    name = 'InitMigraion1595747744662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "email_tasks" ("id" SERIAL NOT NULL, "message" json NOT NULL DEFAULT '{}', "timestamp" bigint DEFAULT null, CONSTRAINT "PK_f02263c34e39857a38cac54736d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "email_tasks"`);
    }

}
