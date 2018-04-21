var NetCode = /** @class */ (function () {
    function NetCode() {
    }
    /************************************************************************/
    /*                       消息定义                                       */
    /************************************************************************/
    /**
     * 错误消息
     */
    NetCode.ERROR_RESPOSE = 100; //错误信息
    NetCode.WSM_C_RANKUP_HERO = 11030; //英雄等級提升(使用一次藥品)
    NetCode.WSM_S_RANKUP_HERO = 11031; //提升英雄等級結果
    NetCode.WSM_C_RANKUPS__HERO = 10090; //一鍵英雄等級的提升
    NetCode.WSM_S_RANKUPS__HERO = 10091; //一鍵盤提升英雄等級結果
    NetCode.WSM_C_MAIN_COPY = 15000; // 挑战主线关卡
    NetCode.WSM_S_MAIN_COPY_RULT = 15001; // 挑战主线关卡结果
    NetCode.WSM_C_UP_MASTER_SKILL = 15016; // 升级主公技能
    NetCode.WSM_S_UP_MASTER_SKILL_RULT = 15017; // 主公技能升级
    NetCode.WSM_C_GET_OFFLINE_PROFIT = 15018; // 领取离线收益
    NetCode.WSM_S_OFFLINE_PROFIT_INFO = 15019; // 离线收益信息
    NetCode.WSM_S_ONLINE_OK = 15020; // 上线成功
    NetCode.WSM_S_LOGIN_OK = 15021; // 玩家登陆成功收到的第一条消息
    NetCode.WSM_C_HEART = 15022; //心跳
    NetCode.WSM_C_AUTH = 10001; // client request login account
    NetCode.WSM_S_AUTH_RULT = 10002; // 登陆结果
    NetCode.WSM_C_CREATE_CHAR = 10003; // 创建角色
    NetCode.WSM_S_CREATE_CHAR = 10004; // 告知client 创角
    NetCode.WSM_S_CHEATE_CHAR_RULT = 10005; // 创角结果
    NetCode.WSM_S_CLOSE_AGENT = 10006; // 断开agent
    NetCode.WSM_S_ONLINE_INFO = 10010; // 角色信息
    NetCode.WSM_S_USER_INFO = 10011; // 同步用户信息
    NetCode.WSM_S_USER_NEW_HERO = 10012; // 通知获得新的英雄
    NetCode.WSM_C_GET_BAG_INFO = 10020; // 请求背包信息
    NetCode.WSM_S_GET_BAG_INFO = 10021; // 返回背包信息
    NetCode.WSM_C_SOLD_ITEM = 10022; // 物品出售
    NetCode.WSM_S_SOLD_ITEM = 10023; // 返回物品出售
    NetCode.WSM_C_USE_ITEM = 10024; // 物品出售
    NetCode.WSM_S_USE_ITEM = 10025; // 返回物品出售
    NetCode.WSM_C_HERO_RESOLVE = 11063; // 英雄碎片分解
    NetCode.WSM_S_HERO_RESOLVE = 11064; // 英雄碎片分解 返回
    /*========================抽獎操作======================*/
    NetCode.WSM_C_LOTTERY_DRAW_GOLD = 10026; // 金币抽奖
    NetCode.WSM_S_LOTTERY_DRAW_GOLD = 10027; // 返回金币抽奖
    NetCode.WSM_C_LOTTERY_DRAW_MONEY = 10028; // 钻石抽奖
    NetCode.WSM_S_LOTTERY_DRAW_MONEY = 10029; // 返回钻石抽奖
    /* ======================== 英雄操作 ======================== */
    NetCode.WSM_C_HERO_ADDEXP = 11030; // 增加英雄经验
    NetCode.WSM_S_HERO_ADDEXP = 11031; // 增加英雄经验
    NetCode.WSM_C_GET_COUNTS_MONEY = 11032; // 获取次数统计
    NetCode.WSM_S_GET_COUNTS_FRESH = 11033; // 获取次数统计（每天定时刷新的数据）  返回
    NetCode.WSM_C_HERO_SKILL_LEVEL_UP = 11034; // 英雄技能升级
    NetCode.WSM_S_HERO_SKILL_LEVEL_UP = 11035; // 英雄技能升级 返回
    NetCode.WSM_S_HERO_JIBAN_UPDATA = 10170; //英雄羈絆信息更新返回
    NetCode.WSM_C_HERO_STAR_UP = 11036; // 英雄升星
    NetCode.WSM_S_HERO_STAR_UP = 11037; // 英雄升星 返回
    NetCode.WSM_C_HERO_LEARN_BOOK = 11038; // 英雄学习招式
    NetCode.WSM_S_HERO_LEARN_BOOK = 11039; // 英雄学习招式 返回
    NetCode.WSM_C_HERO_QUALITY_UP = 11040; // 英雄升阶
    NetCode.WSM_S_HERO_QUALITY_UP = 11041; // 英雄升阶 返回
    NetCode.WSM_C_HERO_RELIVE = 11042; // 英雄重生
    NetCode.WSM_S_HERO_RELIVE = 11043; // 英雄重生 返回
    NetCode.WSM_C_HERO_ALL_LIST = 11044; // 上阵英雄列表
    NetCode.WSM_S_HERO_ALL_LIST = 11045; // 上阵英雄列表 返回
    NetCode.WSM_C_HERO_ALL_LIST_NEW = 11046; // 所有英雄列表
    NetCode.WSM_S_HERO_ALL_LIST_NEW = 11047; // 所有英雄列表 返回
    NetCode.WSM_C_HERO_ONE_LIST_NEW = 11048; //更新单个英雄数据的协议
    NetCode.WSM_S_HERO_ONE_LIST_NEW = 11049; // 英雄单个 返回
    NetCode.WSM_C_HERO_COMBIN = 11050; // 英雄合成
    NetCode.WSM_S_HERO_COMBIN = 11051; // 英雄合成 返回
    NetCode.WSM_C_HERO_BOOK_COMPOSE = 11056; //英雄技能书合成
    NetCode.WSM_S_HERO_BOOK_COMPOSE = 11057; //英雄技能书合成返回
    NetCode.WSM_C_HERO_SKILL_ONE_KEY = 11052; // 英雄技能升级
    NetCode.WSM_S_HERO_SKILL_ONE_KEY = 11053; // 英雄技能升级 返回
    NetCode.WSM_C_HERO_BASIC_BATTLE = 11054; //英雄基础属性			 // 英雄基础战力
    NetCode.WSM_S_HERO_BASIC_BATTLE = 11055; // 英雄基础战力 返回
    NetCode.WSM_C_HERO_JIBAN_NEW = 11058; //请求最新的羁绊信息
    /* ======================== 装备操作↓ ======================== */
    NetCode.WSM_C_EQUIP_STRENGTHEN = 10046; // 装备强化
    NetCode.WSM_S_EQUIP_STRENGTHEN = 10047; // 装备强化 返回
    NetCode.WSM_C_EQUIP_BREAK = 10048; // 装备突破
    NetCode.WSM_S_EQUIP_BREAK = 10049; // 装备突破 返回
    NetCode.WSM_C_EQUIP_STRENGTHEN_ALL = 10050; // 装备一键强化
    NetCode.WSM_S_EQUIP_STRENGTHEN_ALL = 10051; // 装备一键强化 返回
    NetCode.WSM_C_EQUIP_BREAK_ALL = 10052; // 装备一键突破
    NetCode.WSM_S_EQUIP_BREAK_ALL = 10053; // 装备一键突破 返回
    NetCode.WSM_C_EQUIP_REFINE = 10054; // 装备精炼
    NetCode.WSM_S_EQUIP_REFINE = 10055; // 装备精炼 返回
    NetCode.WSM_C_TREASURE_REFINE = 10056; // 宝物精炼
    NetCode.WSM_S_TREASURE_REFINE = 10057; // 宝物精炼 返回
    NetCode.WSM_C_TREASURE_STRENGTHEN = 10058; // 宝物强化
    NetCode.WSM_S_TREASURE_STRENGTHEN = 10059; // 宝物强化 返回
    NetCode.WSM_C_TREASURE_BREAK = 10060; // 宝物突破
    NetCode.WSM_S_TREASURE_BREAK = 10061; // 宝物突破 返回
    NetCode.WSM_C_TREASURE_STRENGTHEN_MAX = 10062; // 宝物最大强化
    NetCode.WSM_S_TREASURE_STRENGTHEN_MAX = 10063; // 宝物最大强化 返回
    /* ======================== 英雄额外信息获取↓ ======================== */
    NetCode.WSM_C_HERO_SKILL = 10080; // 获英雄技能
    NetCode.WSM_S_HERO_SKILL = 10081; // 获英雄技能 返回
    NetCode.WSM_C_HERO_BOOKS = 10082; // 获英雄书籍
    NetCode.WSM_S_HERO_BOOKS = 10083; // 获英雄书籍 返回
    NetCode.WSM_C_HERO_EQUIP = 10084; // 获取英雄装备
    NetCode.WSM_S_HERO_EQUIP = 10085; // 获取英雄装备 返回
    /* ======================== 英雄上阵型↓ ======================== */
    NetCode.WSM_C_FORMATION_ON = 10100; // 上阵
    NetCode.WSM_S_FORMATION_ON = 10101; // 上阵 返回
    /* ======================== 商店信息↓ ======================== */
    NetCode.WSM_C_SHOP_GET_INFO = 10120; // 获取商店信息
    NetCode.WSM_S_SHOP_GET_INFO = 10121; // 获取商店信息 返回
    NetCode.WSM_C_SHOP_BUY_ITEM = 10122; // 购买物品
    NetCode.WSM_S_SHOP_BUY_ITEM = 10123; // 购买物品 返回
    NetCode.WSM_C_SHOP_FRESH_ITEM = 10124; // 刷新商店
    NetCode.WSM_S_SHOP_FRESH_ITEM = 10125; // 刷新商店 返回
    /* ======================== 邮件信息↓ ======================== */
    NetCode.WSM_S_NEW_EMAIL = 10150; // 通知新的邮件信息
    NetCode.WSM_C_GET_EMAIL_INFO = 10151; // 获取邮件信息
    NetCode.WSM_S_GET_EMAIL_INFO = 10152; // 获取邮件信息 返回
    NetCode.WSM_C_GET_EMAIL_APPENDIX = 10153; // 提取附件信息
    NetCode.WSM_S_GET_EMAIL_APPENDIX = 10154; // 提取附件信息 返回
    NetCode.WSM_S_READ_SYSY_EMALL = 10155; // 读取信息 
    NetCode.WSM_c_READ_SYSY_EMALL = 10156; // 读取信息 返回
    /* ======================= 章节信息↓ ====================== */
    NetCode.WSM_S_PUBLIC_LOGIN_MSG = 10174; // 系统消息 公告
    NetCode.WSM_S_GET_STAGE_IONFO = 10175; // 章节挑战相关信息 返回 
    NetCode.WSM_S_GET_STATIC_FLAG = 10176; // 静态标记信息 返回
    NetCode.WSM_S_GET_REWARD_FLAG = 10177; // 奖励标志信息 返回
    NetCode.WSM_S_GET_MONTH_FLAG = 10178; // 每月重置信息 返回
    NetCode.WSM_S_GET_ARRAT_INFO = 10179; // 用数组标记的数据数据
    /* ======================= 英雄挑战信息↓ ====================== */
    NetCode.WSM_C_HERO_CHALLENGE_STAGE_LEVEL = 10180; // 英雄挑战（章节关卡）
    NetCode.WSM_S_HERO_CHALLENGE_STAGE_LEVEL = 10181; // 英雄挑战（章节关卡） 结果
    NetCode.WSM_C_HERO_CHALLENGE_STAGE = 10182; // 英雄挑战（章节）
    NetCode.WSM_S_HERO_CHALLENGE_STAGE = 10183; // 英雄挑战（章节） 结果
    NetCode.WSM_C_HERO_CHALLENGE_REWARD = 10184; // 英雄挑战（章节）奖励
    NetCode.WSM_S_HERO_CHALLENGE_REWARD = 10185; // 英雄挑战（章节）奖励 结果
    NetCode.WSM_C_HERO_CLEAN_UP_ALL = 10186; // 一键扫荡（章节）
    NetCode.WSM_S_HERO_CLEAN_UP_ALL = 10187; // 一键扫荡（章节） 结果
    NetCode.WSM_C_HERO_CLEAN_UP = 10188; // 扫荡（章节）
    NetCode.WSM_S_HERO_CLEAN_UP = 10189; // 扫荡（章节） 结果
    /* ======================= 试炼副本信息↓ ====================== */
    NetCode.WSM_C_TRIAL_COPY = 10200; // 试炼副本
    NetCode.WSM_S_TRIAL_COPY = 10201; // 试炼副本 结果
    NetCode.WSM_C_TRIAL_COPY_CLEAN_UP = 10202; // 试炼扫荡
    NetCode.WSM_S_TRIAL_COPY_CLEAN_UP = 10203; // 试炼扫荡 结果
    NetCode.WSM_C_TRIAL_COPY_BUY = 10416;
    NetCode.WSM_S_TRIAL_COPY_BUY = 10417;
    /* ======================= 冒险信息↓ ====================== */
    NetCode.WSM_C_ADVENTURE_LEVEL = 10240; // 冒险
    NetCode.WSM_S_ADVENTURE_LEVEL = 10241; // 冒险 结果
    NetCode.WSM_C_ADVENTURE_STAGE = 10242; // 冒险章节
    NetCode.WSM_S_ADVENTURE_STAGE = 10243; // 冒险章节 结果
    NetCode.WSM_C_ADVENTURE_CLEAN_UP = 10244; // 扫荡
    NetCode.WSM_S_ADVENTURE_CLEAN_UP = 10245; // 冒险 结果
    NetCode.WSM_C_ADVENTURE_REWARD = 10246; // 冒险奖励
    NetCode.WSM_S_ADVENTURE_REWARD = 10247; // 冒险 结果
    /* ======================= 竞技场信息↓ ====================== */
    NetCode.WSM_C_ARENA_LIST_INFO = 10260; // 挑战列表
    NetCode.WSM_S_ARENA_LIST_INFO = 10261; // 挑战列表 结果
    NetCode.WSM_C_ARENA_DETAIL_INFO = 10262; // 对手详情
    NetCode.WSM_S_ARENA_DETAILT_INFO = 10263; // 对手详情 结果
    NetCode.WSM_C_ARENA_CHALLENGE = 10264; // 挑战对手
    NetCode.WSM_S_ARENA_CHALLENGE = 10265; // 挑战对手 结果
    NetCode.WSM_C_ARENA_WORSHIP = 10266; // 膜拜
    NetCode.WSM_S_ARENA_WORSHIP = 10267; // 膜拜 结果
    NetCode.WSM_C_ARENA_ROLLER_COMPACTION = 10268; // 碾压
    NetCode.WSM_S_ARENA_ROLLER_COMPACTION = 10269; // 碾压 结果
    NetCode.WSM_C_ARENA_SCORE_REWARD = 10270; // 积分领奖
    NetCode.WSM_S_ARENA_SCORE_REWARD = 10271; // 积分领奖 结果
    NetCode.WSM_C_ARENA_WORSHIP_INFO = 10272; // 膜拜过的信息
    NetCode.WSM_S_ARENA_WORSHIP_INFO = 10273; // 膜拜过的信息 结果
    NetCode.WSM_C_ARENA_HISTORY_INFO = 10274; // 竞技场历史记录
    NetCode.WSM_S_ARENA_HISTORY_INFO = 10275; // 竞技场历史记录 结果
    /* ======================= 排行榜↓ ====================== */
    NetCode.WSM_C_GET_RANKING_LIST_ARENA = 10276; // 竞技场排行榜
    NetCode.WSM_S_GET_RANKING_LIST_ARENA = 10277; // 竞技场排行榜 返回
    NetCode.WSM_C_GET_RANKING_DETAIL_ARENA = 10278; // 竞技场排行榜
    NetCode.WSM_S_GET_RANKING_DETAIL_ARENA = 10279; // 竞技场排行榜 返回
    NetCode.WSM_C_GET_CHALLENGE_INFO = 10280; // 挑战信息
    NetCode.WSM_S_GET_CHALLENGE_INFO = 10281; // 挑战信息 结果
    NetCode.WSM_C_GET_LIMITCLG_RANK = 10700; //极限挑战排行榜
    NetCode.WSM_S_GET_LIMITCLG_RANK = 10701; //极限挑战排行榜
    /* ======================= 领地协议↓ ====================== */
    NetCode.WSM_C_TERRITORY_INFO = 10290; // 打包领地数据 
    NetCode.WSM_S_TERRITORY_INFO = 10291; // 打包领地数据 返回
    NetCode.WSM_C_BUILDING_UPGRADE = 10292; // 升级建筑 
    NetCode.WSM_S_BUILDING_UPGRADE = 10293; // 升级建筑	返回
    NetCode.WSM_C_BUY_WORKER = 10294; // 购买工人 
    NetCode.WSM_S_BUY_WORKER = 10295; // 购买工人 返回
    NetCode.WSM_C_COMPLETE_BUILD = 10296; // 钻石立即完成 
    NetCode.WSM_S_COMPLETE_BUILD = 10297; // 钻石立即完成 返回
    NetCode.WSM_C_GOLD_COLLECT = 10298; // 金币收集 
    NetCode.WSM_S_GOLD_COLLECT = 10299; // 金币收集 返回
    NetCode.WSM_C_WATER_COLLECT = 10300; // 圣水收集 
    NetCode.WSM_S_WATER_COLLECT = 10301; // 圣水收集 返回
    /* ======================= 极限挑战↓ ====================== */
    NetCode.WSM_C_HIGH_POINT_CHALLENGE = 10320; // 极限挑战
    NetCode.WSM_S_HIGH_POINT_CHALLENGE = 10321; // 极限挑战 返回
    NetCode.WSM_C_HIGH_POINT_CLEAN_UP = 10322; // 极限扫荡
    NetCode.WSM_S_HIGH_POINT_CLEAN_UP = 10323; // 极限扫荡 返回
    NetCode.WSM_C_HIGH_POINT_CLEAN_UP_END = 10324; // 极限扫荡
    NetCode.WSM_S_HIGH_POINT_CLEAN_UP_END = 10325; // 极限扫荡 返回
    NetCode.WSM_C_HIGH_POINT_ADVENTURE = 10326; // 奇遇挑战
    NetCode.WSM_S_HIGH_POINT_ADVENTURE = 10327; // 奇遇挑战 返回
    NetCode.WSM_C_HIGH_POINT_ADVENTURE_CLEAN_UP = 10328; // 奇遇扫荡
    NetCode.WSM_S_HIGH_POINT_ADVENTURE_CLEAN_UP = 10329; // 奇遇扫荡 返回
    /* ======================= 签到↓ ====================== */
    NetCode.WSM_C_SIGN_IN = 10340; // 签到
    NetCode.WSM_S_SIGN_IN = 10341; // 签到 返回
    NetCode.WSM_C_SIGN_IN_VIP = 10342; // vip签到
    NetCode.WSM_S_SIGN_IN_VIP = 10343; // vip签到  返回
    NetCode.WSM_C_SIGN_IN_ACCUMULATIVE = 10344; // 累计签到
    NetCode.WSM_S_SIGN_IN_ACCUMULATIVE = 10345; // 累计签到 返回
    /* ======================= 在线奖励↓ ====================== */
    NetCode.WSM_C_ONLINE_REWARD = 10360; // 在线奖励
    NetCode.WSM_S_ONLINE_REWARD = 10361; // 在线奖励 返回
    /* ======================= 快速战斗↓ ====================== */
    NetCode.WSM_C_FAST_FIGHT = 10378; // 快速战斗
    NetCode.WSM_S_FAST_FIGHT = 10379; // 快速战斗 返回
    /* ======================= 任务+成就↓+开服 ====================== */
    NetCode.WSM_C_GET_TASK_REWARD = 10380; // 每日任务奖励
    NetCode.WSM_S_GET_TASK_REWARD = 10381; // 每日任务奖励 返回
    NetCode.WSM_C_GET_ACHIVE_REWARD = 10390; // 成就奖励
    NetCode.WSM_S_GET_ACHIVE_REWARD = 10391; // 成就奖励 返回
    NetCode.WSM_C_GET_ACTPOINT_REWARD = 10392; // 活跃点奖励
    NetCode.WSM_S_GET_ACTPOINT_REWARD = 10393; // 活跃点奖励 返回
    NetCode.WSM_C_GET_OPEN_SVR_REWARD = 10394; // 开服活动奖励
    NetCode.WSM_S_GET_OPEN_SVR_REWARD = 10395; // 开服活动奖励 返回
    NetCode.WSM_C_GET_OPEN_SVR_END_REWARD = 10398; // 开服活动碎片奖励
    NetCode.WSM_S_GET_OPEN_SVR_END_REWARD = 10399; // 开服活动碎片奖励 返回
    /* ======================= 购买↓ ====================== */
    NetCode.WSM_C_BUY_ARENA_TIME = 10400; // 购买竞技场次数
    NetCode.WSM_S_BUY_ARENA_TIME = 10401; // 购买冒险体力 返回
    NetCode.WSM_C_BUY_STRENTH_HERO_CHALLENGE = 10402; // 购买英雄挑战体力
    NetCode.WSM_S_BUY_STRENTH_HERO_CHALLENGE = 10403; // 购买冒险体力 返回
    NetCode.WSM_C_BUY_STRENTH_ADVENTURE = 10404; // 购买冒险体力
    NetCode.WSM_S_BUY_STRENTH_ADVENTURE = 10405; // 购买冒险体力 返回
    NetCode.WSM_C_BUY_HERO_CHALLENGE_TIMES = 10406; // 购买冒险次数
    NetCode.WSM_S_BUY_HERO_CHALLENGE_TIMES = 10407; // 购买冒险次数 返回
    NetCode.WSM_C_BUY_RESET_HIGH_POINTS = 10408; // 重置极限挑战
    NetCode.WSM_S_BUY_RESET_HIGH_POINTS = 10409; // 重置极限挑战返回
    NetCode.WSM_C_BUY_GOLD = 10410; // 购买金币
    NetCode.WSM_S_BUY_GOLD = 10411; // 购买金币 返回
    /* ======================= 7日登陆领奖↓ ====================== */
    NetCode.WSM_C_GET_7_DAYS_REWARD = 10520; // 7日登陆领奖
    NetCode.WSM_S_GET_7_DAYS_REWARD = 10521; // 日登陆领奖 返回
    NetCode.WSM_C_GET_200_DAYS_REWARD = 10522; // 百日登陆领奖
    NetCode.WSM_S_GET_200_DAYS_REWARD = 10523; // 百日登陆领奖 返回
    NetCode.WSM_C_GET_SPRING_DAYS_REWARD = 10524; // 百日登陆领奖
    NetCode.WSM_S_GET_SPRING_DAYS_REWARD = 10525; // 百日登陆领奖 返回
    /* ======================= 自动挑战boss↓ ====================== */
    NetCode.WSM_C_SET_AUTO_BOSS = 10540; // 设置自动boss
    NetCode.WSM_S_SET_AUTO_BOSS = 10541; // 设置自动boss 返回
    /* ======================= 兑换码↓ ====================== */
    NetCode.WSM_C_GET_REDEEM = 10550; // 设置自动boss
    NetCode.WSM_S_GET_REDEEM = 10551; // 设置自动boss 返回
    /* ======================= 探索↓ ====================== */
    NetCode.WSM_C_GET_DRAW = 10580; // 转盘
    NetCode.WSM_S_GET_DRAW = 10581; // 转盘 返回
    NetCode.WSM_C_EXPLORE_OPEN = 10582; // 开宝箱
    NetCode.WSM_S_EXPLORE_OPEN = 10583; // 开宝箱 返回
    NetCode.WSM_C_EXPLORE_BUSINESSMAN = 10584; // 商人
    NetCode.WSM_S_EXPLORE_BUSINESSMAN = 10585; // 商人 返回
    NetCode.WSM_C_EXPLORE_ROB = 10586; // 掠夺
    NetCode.WSM_S_EXPLORE_ROB = 10587; // 掠夺 返回
    NetCode.WSM_C_EXPLORE_STEAL = 10588; // 盗取
    NetCode.WSM_S_EXPLORE_STEAL = 10589; // 盗取 返回
    NetCode.WSM_C_EXPLORE_ENEMY = 10590; // 遭遇敌人
    NetCode.WSM_S_EXPLORE_ENEMY = 10591; // 遭遇敌人 返回
    /* ======================== GM↓ ======================== */
    NetCode.WSM_C_GM = 18000; // GM cmd
    NetCode.WSM_S_GM = 18001; // GM 返回
    /* ======================== 排行榜↓ ======================== */
    NetCode.WSM_C_GET_RANK_HIGH_POINT = 10700; // 排行榜 极限挑战
    NetCode.WSM_S_GET_RANK_HIGH_POINT = 10701; // 排行榜 极限挑战
    NetCode.WSM_C_GET_RANK_LEVEL = 10702; // 等级 极限挑战
    NetCode.WSM_S_GET_RANK_LEVEL = 10703; // 等级 极限挑战
    NetCode.WSM_C_GET_RANK_BATTLE = 10704; // 战力 极限挑战
    NetCode.WSM_S_GET_RANK_BATTLE = 10705; // 战力 极限挑战
    NetCode.WSM_C_GET_GATE_BATTLR = 10706; // 关卡
    NetCode.WSM_S_GET_GATE_BATTLR = 10707; // 关卡
    NetCode.WSM_C_GET_HERO_RANK = 10708;
    NetCode.WSM_S_GET_HERO_RANK = 10709;
    NetCode.WSM_C_GET_BATTLE = 10086; // 战力
    NetCode.WSM_S_GET_BATTLE = 10087;
    /* ======================== 新手引导↓ ======================== */
    NetCode.WSM_C_CHAR_GUID_ID = 10900; // 引导id
    NetCode.WSM_S_CHAR_GUID_ID = 10901; // 引导id
    NetCode.WSM_C_HERO_ZHAOMU = 14050; //英雄招募
    NetCode.WSM_S_HERO_ZHAOMU = 14051; //英雄招募返回
    NetCode.WSM_C_CHAT_WORLD = 10800; //聊天发送
    NetCode.WSM_S_CHAT_WORLD = 10801; //聊天发送
    NetCode.WSM_S_CHAT_FORBID = 10803; //聊天被禁言 接受
    NetCode.WSM_C_BUY_MAGIC_STONE = 10412; //兑换宝石
    NetCode.WSM_S_BUY_MAGIC_STONE = 10413; //兑换宝石
    /*==================================商业化开服活动=================*/
    NetCode.WSM_S_BUS_ACT_FINISH = 11200; //商业开服活动完成目标 返回
    NetCode.WSM_S_BATTLE_CHANGE = 11202; //战力变更 返回
    NetCode.WSM_S_BUS_ACT_STATE = 11204; //商业开服活动状态 返回
    NetCode.WSM_C_GET_BUS_ACT_REWARD = 11300; //奖励领取
    NetCode.WSM_S_GET_BUS_ACT_REWARD = 11301; //奖励领取返回 
    NetCode.WSM_C_GIFT_LIMIT_BUY = 11302; //福利抢购
    NetCode.WSM_S_GIFT_LIMIT_BUY = 11303; //福利抢购返回 
    NetCode.WSM_C_GIFT_LIMIT_NUM = 11207; //福利抢购 物品购买数量
    NetCode.WSM_S_GIFT_LIMIT_NUM = 11208; //福利抢购 物品购买数量 返回 
    NetCode.WSM_C_PAY_DAYS_COUNT_RWD = 11212; //累充奖励
    NetCode.WSM_S_PAY_DAYS_COUNT_RWD = 11213; //累充奖励 返回
    NetCode.WSM_C_GEM_GFT = 11304; //宝石派对
    NetCode.WSM_S_GEM_GFT = 11305; //宝石派对 返回
    NetCode.WSM_S_GEM_GFT_INFO = 10172; //宝石派对 玩家获取信息返回
    /*============================用户信息变更==================================*/
    NetCode.WSM_C_CHANGE_NAME = 10952; //改名
    NetCode.WSM_S_CHANGE_NAME = 10953;
    NetCode.WSM_C_CHANGE_HEAD_ID = 10950; //换头像
    NetCode.WSM_S_CHANGE_HEAD_ID = 10951;
    /*=============================vip======================*/
    NetCode.WSM_C_BUY_IPGIFT = 10420; //Vip礼包
    NetCode.WSM_S_BUY_VIPGIFT = 10421;
    NetCode.WSM_C_MONTH_CARD_REWARD = 10362; //小月卡
    NetCode.WSM_S_MONTH_CARD_REWARD = 10363;
    NetCode.WSM_C_MONTH_VIP_CARD_REWARD = 10364; //大月卡
    NetCode.WSM_S_MONTH_VIP_CARD_REWARD = 10365;
    NetCode.WSM_S_RECHANGE = 11210;
    NetCode.WSM_C_FIRST_CHARGE = 11500; //首冲
    NetCode.WSM_S_FIRST_CHARGE = 11501;
    /*======================删档返利======================*/
    NetCode.WSM_C_SHAN_DANG_SIGNIN = 11400; //删档返利签到
    NetCode.WSM_S_SHAN_DANG_SIGNIN = 11401; //删档返利签到返回
    NetCode.WSM_C_MAIN_TASK_GET = 10396; //主线任务领取
    NetCode.WSM_S_MAIN_TASK_GET = 10397; //主线任务领取 返回
    NetCode.WSM_S_MAT_CHANGE = 10419; //材料领取
    /*========================特训=====================*/
    NetCode.WSM_C_HERO_BASIC_TRAIN = 11059; //英雄 基础训练
    NetCode.WSM_S_HERO_BASIC_TRAIN = 11060; //英雄 基础训练 返回
    NetCode.WSM_C_HERO_BASIC_TRAIN_BREAK = 11061; //英雄 基础训练 突破
    NetCode.WSM_S_HERO_BASIC_TRAIN_BREAK = 11062; //英雄 基础训练 突破 返回
    /*=====================分享======================*/
    NetCode.WSM_C_SHARE = 10552; //分享
    NetCode.WSM_S_SHARE = 10553; //分享返回
    /*===============购买阵位===================*/
    NetCode.WSM_C_BUY_FORMATION_ON = 10554; //购买阵位
    NetCode.WSM_S_BUY_FORMATION_ON = 10555; // 购买上阵位 返回
    /* ==========================成长基金===================*/
    NetCode.WSM_C_INVEST = 11600; //成长基金
    NetCode.WSM_S_INVEST = 11601; //成长基金 返回
    NetCode.WSM_C_INVEST_REWARD = 11602; //成长基金 奖励
    NetCode.WSM_S_INVEST_REWARD = 11603; //成长基金 奖励 返回
    NetCode.WSM_C_INVEST_GROUP = 11604; //成长基金 团购
    NetCode.WSM_S_INVEST_GROUP = 11605; //成长基金 团购 返回
    /*==========================关注奖励==============*/
    NetCode.WSM_C_FOLLOW_REWARD = 10556; //关注礼包
    NetCode.WSM_S_FOLLOW_REWARD = 10557; //关注礼包 返回
    /*============================跨天===============*/
    NetCode.WSM_C_ACROSS_DAY = 11206;
    /*===========================双倍活动==========*/
    NetCode.WSM_S_DOUBLE_ACTIVE = 11340;
    /*==================红包==================*/
    NetCode.WSM_C_RED_GOLD = 11780;
    NetCode.WSM_S_RED_GOLD = 11781;
    /*===============公告====================*/
    NetCode.WSM_S_HERO_NOTICE = 10099;
    /*==================抢红包================*/
    NetCode.WSM_C_START_RED_PACKET = 11750; //红包开始 
    NetCode.WSM_C_GET_RED_PACKET_INFO = 10698; //红包榜
    NetCode.WSM_S_GET_RED_PACKET_INFO = 10699; //红包榜返回
    NetCode.WSM_C_BUY_REDBOX_NUM = 10422; //购买额外的红包次数
    /*=============记录cd===================*/
    NetCode.WSM_C_USER_DATE = 11700;
    NetCode.WSM_S_USER_DATE = 11701;
    NetCode.WSM_C_USER_DATE_REMOVE = 11702;
    NetCode.WSM_S_USER_DATE_REMOVE = 11703;
    NetCode.WSM_C_USER_DATE_GET = 11704;
    NetCode.WSM_S_USER_DATE_GET = 11705;
    /*===================幸运宝箱==============*/
    NetCode.WSM_C_LUCKY_BOX_OPEN = 10030;
    NetCode.WSM_S_LUCKY_BOX_OPEN = 10031;
    /*===============刷新体力==================*/
    NetCode.WSM_C_REFRSH_TILI = 10510;
    /*==================物品兑换================*/
    NetCode.WSM_C_FU_EXCHANGE = 10424;
    NetCode.WSM_S_FU_EXCHANGE = 10425;
    return NetCode;
}());
//# sourceMappingURL=NetCode.js.map