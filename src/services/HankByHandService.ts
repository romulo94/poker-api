/* eslint-disable no-restricted-syntax */
import PokerApi from 'pokersolver';
import AppError from '../errors/AppError';

import VerifyDuplicated from '../util/duplicated';
import VerifyTotalCards from '../util/numberOfCard';

interface Request {
  hands: [string][];
}
interface Response {
  hank: Record<string, any>;
}

class HankByHandService {
  public execute({ hands }: Request): Response {
    const PokerHand = PokerApi.Hand;

    if (hands.length < 2) throw new AppError('Mínimo de duas mãos', 400);

    const uniqueList = [];

    for (const element of hands) {
      uniqueList.push(...element);
    }

    if (!VerifyTotalCards(hands.length, uniqueList.length, 5)) {
      throw new AppError('As mãos devem conter 5 cartas', 400);
    }

    if (VerifyDuplicated(uniqueList))
      throw new AppError('Cartas repetidas', 400);

    const result = [];

    for (const hand of hands) {
      const { name, descr, rank } = PokerHand.solve(hand, 'standard');

      result.push({
        name,
        rank,
        descr,
        hand,
      });
    }

    const hank = result;

    return {
      hank,
    };
  }
}

export default HankByHandService;
