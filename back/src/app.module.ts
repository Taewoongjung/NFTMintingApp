import { Module } from '@nestjs/common';
import { FileuploadService } from './fileupload/fileupload.service';
import { FileuploadModule } from './fileupload/fileupload.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import {Users} from "./entities/Users";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true}),
      AuthModule,
      UsersModule,
      FileuploadModule,
      TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          entities: [
              Users,
          ],
          migrations: [__dirname + '/src/migrations/*.ts'],
          autoLoadEntities: true,
          charset: 'utf8mb4',
          synchronize: true,
      }),
  ],
  providers: [ConfigService],
})

export class AppModule {}
