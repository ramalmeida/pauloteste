import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'student'})
export class StudentEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ name: 'name', nullable: false })
nameStudent: string

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAT: string
}
