import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [AuthModule, UsersModule, DatabaseModule , MongooseModule.forRoot('mongodb://127.0.0.1:27017/task')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
