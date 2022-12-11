import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaDuploDMembersRepository } from './repositories/prisma/prisma-duplod-members-repository';
import { DuploDMembersRepository } from './repositories/duplod-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: DuploDMembersRepository,
      useClass: PrismaDuploDMembersRepository,
    },
  ],
})
export class AppModule {}
