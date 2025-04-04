# MEV stealing. Reasons, consequences, and prevention measures

## What is MEV stealing?

"MEV stealing" stands for violating the [Lido on Ethereum Block Proposer Rewards Policy](https://snapshot.org/#/lido-snapshot.eth/proposal/0x7ac2431dc0eddcad4a02ba220a19f451ab6b064a0eaef961ed386dc573722a7f). Simply speaking, any block proposed by the CSM validator with either base block rewards or MEV rewards directed to an address different from the Lido Execution Layer Rewards Vault ([Mainnet](/deployed-contracts/index.md), [Hoodi](/deployed-contracts/hoodi.md)) is considered to be a violating block.

## How does CSM react to MEV stealing?

Once such a block is detected, the MEV Stealing Detection Committee (dev EOA on the testnet and CSM Multisig on the mainnet) reports this fact on-chain using the [`reportELRewardsStealingPenalty`](/staking-modules/csm/contracts/CSModule.md#reportelrewardsstealingpenalty) method. Call of the method results in a lock of the stolen amount + fixed stealing fine (0.1 ETH). Locked funds have not yet been burned, but will be accounted for during the required [bond](../join-csm#bond) calculation.

Right after that, a challenge period starts. During this period, Node Operators can:

- **Reach out to the Lido DAO** using a [dedicated section on the research forum](https://research.lido.fi/c/csm-support/21) (or to the Dev team in Discord for the testnet) if they disagree with the fact of stealing. For example, they think the detection was incorrect and all MEV + base rewards were properly allocated. If so, the MEV Stealing Detection Committee can cancel the penalty.
- **Compensate for the stolen funds + stealing fine** using the [bond](../join-csm#bond) unlock tab ([mainnet link](https://csm.lido.fi/bond/unlock), [testnet link](https://csm.testnet.fi/bond/unlock)) on CSM UI. This is the best option!
- **Top-up [bond](../join-csm#bond) to compensate for the [bond](../join-csm#bond) lock** using the top-up [bond](../join-csm#bond) tab ([mainnet link](https://csm.lido.fi/bond/add), [testnet link](https://csm.testnet.fi/bond/add)) on CSM UI. In this case, the penalty would still be applied later, but no unbonded validators would appear if the top-up were sufficient. This case is a slightly worse option since the beneficial [bond](../join-csm#bond) curve will be reset after the penalty confirmation, but it is still acceptable.
- **Do nothing.** In this case, a penalty would be proposed to the Lido DAO for confirmation by EasyTrack motion. If the LDO holders do not object to the motion, the MEV detection committee will enact it, and [bond](../join-csm#bond) tokens will be burned. If, after the burn, the [bond](../join-csm#bond) is not sufficient to cover all uploaded keys, either new deposits to the [unbonded keys](/staking-modules/csm/join-csm#unbonded-validators) will be suspended, or, if all of the keys are already deposited, unbonded validators will be requested to exit. You can read more on the measures applied in case of not exiting the validators [here](/staking-modules/csm/validator-exits#protocol-initiated-exits). Also, upon penalty confirmation, the [bond](../join-csm#bond) curve will be [reset](/staking-modules/csm/penalties.md#benefits-reset) for the Node Operator if they previously had a beneficial [bond](../join-csm#bond) curve.

## How to avoid MEV stealing?

Please make sure to configure your setup according to the guides ([guide #1](https://operatorportal.lido.fi/modules/community-staking-module), [guide #2](https://dvt-homestaker.stakesaurus.com/bonded-validators-setup/lido-csm)) and requirements to avoid penalization!

Alternatively, use one of the custom-made CSM integrations listed [here](https://operatorportal.lido.fi/modules/community-staking-module).
