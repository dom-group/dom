## 接口说明
* IPHInvitation

1. register(address _referrer)，用户注册，需要传入推荐人地址 
2. promote(uint256 _level), 用户升级，_level从0开始，范围0-4


* IPHPool

1. earned(address account) 查询当前奖励
2. deposit(uint256 _pid, uint256 _amountA, uint256 _rid) pid: 池子pid,_amountA：入金,_rid：选择的投资类型
3. withdraw(uint256 _pid) 提现
4. withdrawReward 获取奖励


# IPH 合约地址记录主网

| 地址 | 说明 |
|-----|-------|
| IPH | 0x2ff31405F589cE517DbC5cA1D3C60772eAD8d05e |
| IPHPool | 0xDe0D026CC12B4DBb4D2384DB2FC6366792F5c95e |
| IPHInvitation | 0xaC6b4c0b44017e652f87D82554d6f8BD929b0ac8 |
| USDT | 0x55d398326f99059fF775485246999027B3197955 |
| BTC | 0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c |
| ETH | 0x2170Ed0880ac9A755fd29B2688956BD959F933F8 |
| Factory | 0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73 |
| IPHPerBlock | 280211107060185180 |
| ROOT | 0x914Da3a7AC00F04Bc8A4CA98470fb23aDF73d70b |
