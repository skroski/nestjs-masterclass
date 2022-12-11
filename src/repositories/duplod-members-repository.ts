export abstract class DuploDMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
}
