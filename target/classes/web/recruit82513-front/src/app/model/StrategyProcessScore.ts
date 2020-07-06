import { StrategyDTO } from './StrategyDto';

export class StrategyProcessScore {

  constructor(strategyDto: StrategyDTO, processScore: object) {
    this.strategyDto = strategyDto;
    this.processScore = processScore;
  }

  strategyDto: StrategyDTO;
  processScore: object;

  public static deserialize(input: any) {
    if (input == null) {
      return null;
    }
    const object = new this(null, null);

    object.strategyDto = StrategyDTO.deserialize(input.strategyDTO);
    object.processScore = input.processScore;

    return object;
  }
}
