import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { StudentEntity } from "./student.entity"

@Entity({ name: 'notes' })
export class NotesEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(type => StudentEntity) 
    @JoinColumn() 
    idStudent: string

    @Column({ name: 'note1', nullable: false })
    note1: number

    @Column({ name: 'note2', nullable: false })
    note2: number

    @Column({ name: 'note3', nullable: false })
    note3: number

    @Column({ name: "note4", nullable: false })
    note4: number

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAT: string
}

