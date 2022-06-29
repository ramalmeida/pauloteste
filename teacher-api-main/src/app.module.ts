import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherModule } from './teacher/teacher.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [   
    ConfigModule.forRoot(),
    TeacherModule, 
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize:true,
      entities: [__dirname +'/**/*.entity{.js,.ts}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
