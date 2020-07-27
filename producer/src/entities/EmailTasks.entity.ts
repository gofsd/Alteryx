import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class EmailTasks {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({type: "json", default: {}})
    message!: any;

    @Column({ type: "bigint", default: null })
    timestamp!: number;
}

export default EmailTasks