import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { Body, Controller, Post } from '@nestjs/common';
import { DuploDMembersRepository } from './repositories/duplod-members-repository';

@Controller('app')
export class AppController {
  constructor(private DuploMemberRepository: DuploDMembersRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;
    await this.DuploMemberRepository.create(name, memberFunction);
  }
}
