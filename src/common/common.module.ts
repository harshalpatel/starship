import { Module } from "@nestjs/common";
import { NetworkService } from "../common/network.service";

@Module({
  imports: [],
  providers: [NetworkService],
  exports: [NetworkService],
})
export class CommonModule {}
