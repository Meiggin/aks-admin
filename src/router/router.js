import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') },

        { path: 'editGoods', title: '商品修改', name: 'edit-goods', component: () => import('@/views/goods-manage/edit-goods.vue') },
        { path: 'editBrand', title: '编辑品牌', name: 'edit-brand', component: () => import('@/views/goods-manage/edit-brand.vue') },
        { path: 'editType', title: '编辑分类', name: 'edit-type',  component: () =>  import('@/views/goods-manage/edit-type.vue' )},

        { path: 'orderDetail', title: '订单详情', name: 'order-detail', component: () =>  import('@/views/order-center/order-detail.vue' ) },
        { path: 'rightsDetail', title: '维权详情', name: 'rights-detail', component: () =>  import('@/views/order-center/rights-detail.vue') },
        { path: 'addReplyclass', title: '添加回复内容', name: 'add-replyclass',  component: () =>  import('@/views/order-center/add-replyclass.vue') },

        { path: 'addClassification', title: '添加分类群组', name: 'add-classification', component: () => import('@/views/member-manage/add-classification.vue') },
        { path: 'editClassification', title: '编辑分类群组', name: 'edit-classification', component: () => import('@/views/member-manage/edit-classification.vue') },
        { path: 'editOrslist', title: '编辑会员组', name: 'edit-orslist',  component: () => import('@/views/member-manage/edit-orslist.vue') },
        { path: 'opinionFeedback', title: '意见反馈', name: 'opinion-feedback',  component: () => import('@/views/member-manage/opinion-feedback.vue') },
        { path: 'userInformation', title: '用户信息管理', name: 'user-information',  component: () => import('@/views/member-manage/user-information.vue') },

        { path: 'orderIntegralDetail', title: '订单详情', name: 'orderintegral-detail', component: () => import('@/views/integral-manage/orderintegral-detail.vue') },
        { path: 'editGoodsIntegral', title: '编辑商品信息', name: 'edit-goodsintegral', component: () => import('@/views/integral-manage/edit-goodsintegral.vue')},
        { path: 'rightsIntegralDetail', title: '维权详情', name: 'rightsintegral-detail',  component: () => import('@/views/integral-manage/rightsintegral-detail.vue') },

        { path: 'editAmendGoods', title: '修改商品', name: 'edit-amendGoods', component: () => import('@/views/marketing-gameplay/edit-amendGoods.vue') },
        { path: 'editBargainList', title: '疯狂砍价活动配置', name: 'edit-bargainlist', component: () => import('@/views/marketing-gameplay/edit-bargainlist.vue') },
        { path: 'editCommodityCombination', title: '商品组合', name: 'edit-commoditycombination',  component: () => import('@/views/marketing-gameplay/edit-commoditycombination.vue') },
        { path: 'editGroupPurchase', title: '团购活动配置', name: 'edit-grouppurchase',  component: () => import('@/views/marketing-gameplay/edit-grouppurchase.vue') },
        { path: 'addLimitedPurchase', title: '添加商品', name: 'add-limitedpurchase',  component: () => import('@/views/marketing-gameplay/add-limitedpurchase.vue') },
        { path: 'editPreSale', title: '编辑预售活动', name: 'edit-presale',  component: () => import ('@/views/marketing-gameplay/edit-presale.vue') },
        { path: 'registeredGiftbagDetail', title: '注册礼包配置', name: 'registeredgiftbag-detail',  component: () => import('@/views/marketing-gameplay/registeredgiftbag-detail.vue') },
        { path: 'registeredReceiveDetail', title: '注册礼包领取日志', name: 'registeredreceive-detail',  component: () => import('@/views/marketing-gameplay/registeredreceive-detail.vue') },
        { path: 'editTurntableList', title: '修改大转盘活动', name: 'edit-turntablelist',  component: () => import('@/views/marketing-gameplay/edit-turntablelist.vue') },
        
        { path: 'editPicture', title: '编辑轮播图', name: 'edit-picture', component: () => import('@/views/system-setting/edit-picture.vue') },
        { path: 'editModifyLink', title: '修改友情链接', name: 'edit-modifylink', component: () => import('@/views/system-setting/edit-modifylink.vue') },
        { path: 'editModifySeo', title: '修改SEO', name: 'edit-Modifyseo',  component: () => import('@/views/system-setting/edit-Modifyseo.vue') }

    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/website',
        name: 'website',
        title: '官网',
        component: Main,
        children: [
        { path: 'homePage', title: '官网首页', name: 'home-page', component: () => import('@/views/website/home-page.vue') },
        { path: 'aboutUs', title: '关于我们', name: 'about-us', component: () => import('@/views/website/about-us.vue') },
        { path: 'mediaCenter', title: '媒体中心', name: 'media-center', component: () => import('@/views/website/media-center.vue') },
        { path: 'social', title: '社会责任', name: 'social', component: () => import('@/views/website/social.vue') },
        { path: 'joinUs', title: '人才招聘', name: 'join-us', component: () => import('@/views/website/join-us.vue') },
        { path: 'contactUs', title: '联系我们', name: 'contact-us', component: () => import('@/views/website/contact-us.vue') },
        { path: 'bannerImg', title: '栏目banner配图', name: 'banner-img', component: () => import('@/views/website/banner-img.vue') },
        ]
    },
    {
        path: '/store',
        name: 'store',
        title: '商城',
        component: Main,
        children: [
        { path: 'homePage', title: '公告管理', name: 'notice', component: () => import('@/views/store/notice.vue') },
        { path: 'storeHomePageV3', title: '商城首页2.0', name: 'store-home-page-v2', component: () => import('@/views/store/store-home-page-v2.vue') },
        { path: 'storeHomePageV2', title: '商城首页3.0', name: 'store-home-page-v3', component: () => import('@/views/store/store-home-page-v3.vue') },
        ]
    },
    // {
    //     path: '/access',
    //     name: 'access',
    //     title: '权限管理',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '权限管理', name: 'access_index', component: () => import('@/views/access/access.vue') }
    //     ]
    // },
    // {
    //     path: '/access-test',
    //     title: '权限测试页',
    //     name: 'accesstest',
    //     access: 0,
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/views/access/access-test.vue') }
    //     ]
    // },
    // {
    //     path: '/international',
    //     icon: 'earth',
    //     title: {i18n: 'international'},
    //     name: 'international',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: () => import('@/views/international/international.vue') }
    //     ]
    // },
    {
        path: '/component',
        icon: 'social-buffer',
        name: 'component',
        title: '组件',
        component: Main,
        children: [
            {
                path: 'text-editor',
                icon: 'compose',
                name: 'text-editor',
                title: '富文本编辑器',
                component: () => import('@/views/my-components/text-editor/text-editor.vue')
            },
            {
                path: 'md-editor',
                icon: 'pound',
                name: 'md-editor',
                title: 'Markdown编辑器',
                component: () => import('@/views/my-components/markdown-editor/markdown-editor.vue')
            },
            {
                path: 'image-editor',
                icon: 'crop',
                name: 'image-editor',
                title: '图片预览编辑',
                component: () => import('@/views/my-components/image-editor/image-editor.vue')
            },
            {
                path: 'draggable-list',
                icon: 'arrow-move',
                name: 'draggable-list',
                title: '可拖拽列表',
                component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
            },
            {
                path: 'area-linkage',
                icon: 'ios-more',
                name: 'area-linkage',
                title: '城市级联',
                component: () => import('@/views/my-components/area-linkage/area-linkage.vue')
            },
            {
                path: 'file-upload',
                icon: 'android-upload',
                name: 'file-upload',
                title: '文件上传',
                component: () => import('@/views/my-components/file-upload/file-upload.vue')
            },
            {
                path: 'count-to',
                icon: 'arrow-graph-up-right',
                name: 'count-to',
                title: '数字渐变',
                component: () => import('@/views/my-components/count-to/count-to.vue')
            },
            {
                path: 'split-pane-page',
                icon: 'ios-pause',
                name: 'split-pane-page',
                title: 'split-pane',
                component: () => import('@/views/my-components/split-pane/split-pane-page.vue')
            }
        ]
    },
    // {
    //     path: '/form',
    //     icon: 'android-checkbox',
    //     name: 'form',
    //     title: '表单编辑',
    //     component: Main,
    //     children: [
    //         { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
    //         { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

    //     ]
    // },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    {
        path: '/orderCenter',
        name: 'order-center',
        title: '订单中心',
        component: Main,
        children: [
            { path: 'orderCount', title: '订单概况', name: 'order-count', component: resolve => { require(['@/views/order-center/order-count.vue'], resolve); } },
            { path: 'orderAll', title: '所有订单', name: 'order-all',  component: resolve => { require(['@/views/order-center/order-all.vue'], resolve); } },
            { path: 'orderVip', title: 'VIP订单', name: 'order-vip', component: resolve => { require(['@/views/order-center/order-vip.vue'], resolve); } },
            { path: 'orderMake', title: '预约订单', name: 'order-make',  component: resolve => { require(['@/views/order-center/order-make.vue'], resolve); } },
            { path: 'financeOrder', title: '财务待办', name: 'finance-order',  component: resolve => { require(['@/views/order-center/finance-order.vue'], resolve); } },
            { path: 'saleOrder', title: '售后待办', name: 'sale-order',  component: resolve => { require(['@/views/order-center/sale-order.vue'], resolve); } },
            { path: 'ratingManage', title: '评价管理', name: 'rating-manage',  component: resolve => { require(['@/views/order-center/rating-manage.vue'], resolve); } },
            { path: 'replyManage', title: '回复内容管理', name: 'reply-manage',  component: resolve => { require(['@/views/order-center/reply-manage.vue'], resolve); } },
            { path: 'purchaseManage', title: '企业采购', name: 'purchase-manage',  component: resolve => { require(['@/views/order-center/purchase-manage.vue'], resolve); } }
        ]
    },
    {
        path: '/memberManage',
        name: 'member-manage',
        title: '会员管理',
        component: Main,
        children: [
            { path: 'memberList', title: '会员列表', name: 'member-list', component: resolve => { require(['@/views/member-manage/member-list.vue'], resolve); } },
            { path: 'memberGroup', title: '会员组', name: 'member-group',  component: resolve => { require(['@/views/member-manage/member-group.vue'], resolve); } },
            { path: 'privilegedCode', title: '特权码', name: 'privileged-code', component: resolve => { require(['@/views/member-manage/privileged-code.vue'], resolve); } },
            { path: 'channelClass', title: '通道分类', name: 'channel-class',  component: resolve => { require(['@/views/member-manage/channel-class.vue'], resolve); } },
            { path: 'opinionFeed', title: '意见反馈', name: 'opinion-feed',  component: resolve => { require(['@/views/member-manage/opinion-feed.vue'], resolve); } },
        ]
    },
    {
        path: '/goodsManage',
        name: 'goods-manage',
        title: '商品管理',
        component: Main,
        children: [
            { path: 'goodsList', title: '商品管理', name: 'goods-list', component: resolve => { require(['@/views/goods-manage/goods-list.vue'], resolve); } },
            { path: 'typeList', title: '分类管理', name: 'type-list',  component: resolve => { require(['@/views/goods-manage/type-list.vue'], resolve); } },
            { path: 'brandList', title: '品牌管理', name: 'brand-list', component: resolve => { require(['@/views/goods-manage/brand-list.vue'], resolve); } },
            { path: 'labelList', title: '标签管理', name: 'label-List',  component: resolve => { require(['@/views/goods-manage/label-List.vue'], resolve); } }
        ]
    },
    {
        path: '/integralManage',
        name: 'integral-manage',
        title: '积分管理',
        component: Main,
        children: [
            { path: 'integralOrder', title: '积分订单', name: 'integral-order', component: resolve => { require(['@/views/integral-manage/integral-order.vue'], resolve); } },
            { path: 'integralGoods', title: '积分商品', name: 'integral-goods',  component: resolve => { require(['@/views/integral-manage/integral-goods.vue'], resolve); } },
            { path: 'integralConfig', title: '积分配置', name: 'integral-config', component: resolve => { require(['@/views/integral-manage/integral-config.vue'], resolve); } },
            { path: 'serviceOrder', title: '售后订单', name: 'service-order',  component: resolve => { require(['@/views/integral-manage/service-order.vue'], resolve); } },
        ]
    },
    {
        path: '/marketingGameplay',
        name: 'marketing-gameplay',
        title: '营销玩法',
        component: Main,
        children: [
            { path: 'controlCenter', title: '控制中心', name: 'control-center', component: resolve => { require(['@/views/marketing-gameplay/control-center.vue'], resolve); } },
            { path: 'preSale', title: '预售活动', name: 'pre-sale',  component: resolve => { require(['@/views/marketing-gameplay/pre-sale.vue'], resolve); } },
            { path: 'specialOffer', title: '限时特价', name: 'special-offer', component: resolve => { require(['@/views/marketing-gameplay/special-offer.vue'], resolve); } },
            { path: 'registerPackage', title: '注册礼包列表', name: 'register-package',  component: resolve => { require(['@/views/marketing-gameplay/register-package.vue'], resolve); } },
            { path: 'timeLimit', title: '限时限购', name: 'time-limit', component: resolve => { require(['@/views/marketing-gameplay/time-limit.vue'], resolve); } },
            { path: 'insaneBargain', title: '疯狂砍价', name: 'insane-bargain',  component: resolve => { require(['@/views/marketing-gameplay/insane-bargain.vue'], resolve); } },
            { path: 'groupPurch', title: '团购', name: 'group-purch', component: resolve => { require(['@/views/marketing-gameplay/group-purch.vue'], resolve); } },
            { path: 'rotaryTable', title: '大转盘', name: 'rotary-table',  component: resolve => { require(['@/views/marketing-gameplay/rotary-table.vue'], resolve); } },
            { path: 'rotaryPrize', title: '大转盘奖项列表', name: 'rotary-prize',  component: resolve => { require(['@/views/marketing-gameplay/rotary-prize.vue'], resolve); } },
            { path: 'rotaryClass', title: '大转盘奖项分类列表', name: 'rotary-class',  component: resolve => { require(['@/views/marketing-gameplay/rotary-class.vue'], resolve); } },
            { path: 'rotaryGoods', title: '大转盘商品列表', name: 'rotary-goods',  component: resolve => { require(['@/views/marketing-gameplay/rotary-goods.vue'], resolve); } },
            { path: 'rotaryOrder', title: '大转盘订单列表', name: 'rotary-order',  component: resolve => { require(['@/views/marketing-gameplay/rotary-order.vue'], resolve); } },
            { path: 'groupBuy', title: '组合套购', name: 'group-buy',  component: resolve => { require(['@/views/marketing-gameplay/group-buy.vue'], resolve); } },
        ]
    },
    // {
    //     path: '/tables',
    //     icon: 'ios-grid-view',
    //     name: 'tables',
    //     title: '表格',
    //     component: Main,
    //     children: [
    //         { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/views/tables/dragable-table.vue') },
    //         { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
    //         { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
    //         { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
    //         { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue') }
    //     ]
    // },
    // {
    //     path: '/advanced-router',
    //     icon: 'ios-infinite',
    //     name: 'advanced-router',
    //     title: '高级路由',
    //     component: Main,
    //     children: [
    //         { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
    //         { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
    //     ]
    // },
    {
        path: '/systemSetting',
        name: 'system-setting',
        title: '系统配置',
        component: Main,
        children: [
            { path: 'reservationSetting', title: '预约设置', name: 'reservation-setting',  component: resolve => { require(['@/views/system-setting/reservation-setting.vue'], resolve); } },
            { path: 'areaSetting', title: '地区设置', name: 'area-setting', component: resolve => { require(['@/views/system-setting/area-setting.vue'], resolve); } },
            { path: 'inforSetting', title: '系统信息设置', name: 'infor-setting',  component: resolve => { require(['@/views/system-setting/infor-setting.vue'], resolve); } },
            { path: 'gatewaySetting', title: '短信网关设置', name: 'gateway-setting', component: resolve => { require(['@/views/system-setting/gateway-setting.vue'], resolve); } },
            { path: 'registSetting', title: '注册设置', name: 'regist-setting',  component: resolve => { require(['@/views/system-setting/regist-setting.vue'], resolve); } },
            { path: 'smsSetting', title: '短信设置', name: 'sms-setting', component: resolve => { require(['@/views/system-setting/sms-setting.vue'], resolve); } },
            { path: 'shopSetting', title: '店铺设置', name: 'shop-setting',  component: resolve => { require(['@/views/system-setting/shop-setting.vue'], resolve); } },
            { path: 'mailSetting', title: '邮件服务器设置', name: 'mail-setting',  component: resolve => { require(['@/views/system-setting/mail-setting.vue'], resolve); } },
            { path: 'backstageLog', title: '后台操作日志', name: 'backstage-log', component: resolve => { require(['@/views/system-setting/backstage-log.vue'], resolve); } },
            { path: 'linkManage', title: '友情链接管理', name: 'link-manage',  component: resolve => { require(['@/views/system-setting/link-manage.vue'], resolve); } },
            { path: 'adManage', title: '广告管理', name: 'ad-manage', component: resolve => { require(['@/views/system-setting/ad-manage.vue'], resolve); } },
            { path: 'optimalManage', title: '网站优化管理', name: 'optimal-manage',  component: resolve => { require(['@/views/system-setting/optimal-manage.vue'], resolve); } },
            { path: 'versionSetting', title: '版本设置', name: 'version-setting', component: resolve => { require(['@/views/system-setting/version-setting.vue'], resolve); } },
            { path: 'marketSetting', title: '营销设置', name: 'market-setting',  component: resolve => { require(['@/views/system-setting/market-setting.vue'], resolve); } },
            { path: 'webSetting', title: '网站建设设置', name: 'web-setting', component: resolve => { require(['@/views/system-setting/web-setting.vue'], resolve); } },
            { path: 'orderSetting', title: '订单设置', name: 'order-setting',  component: resolve => { require(['@/views/system-setting/order-setting.vue'], resolve); } },
        ]
    },
    {
        path: '/accessManage',
        name: 'access-manage',
        title: '权限管理',
        component: Main,
        children: [
            { path: 'adminList', title: '管理员列表', name: 'admin-list', component: () => import('@/views/access-manage/admin-list.vue') },
            { path: 'roleList', title: '角色列表', name: 'role-list', component: () => import('@/views/access-manage/role-list.vue') },
            { path: 'menuList', title: '菜单管理', name: 'menu-list', component: () => import('@/views/access-manage/menu-list.vue') },
            { path: 'nodeList', title: '节点列表', name: 'node-list', component: () => import('@/views/access-manage/node-list.vue') }
        ]
    },
    // {
    //     path: '/error-page',
    //     icon: 'android-sad',
    //     title: '错误页面',
    //     name: 'errorpage',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '错误页面', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
    //     ]
    // }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
