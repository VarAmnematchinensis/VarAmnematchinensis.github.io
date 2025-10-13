/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/04/25/hello-world/index.html","24040850bc0dac965161b7d84ddf6fd2"],["/2025/08/03/GaussDB(DWS)数据库-基础篇/index.html","54362cbdfd33e95e22d9f077c5ae8870"],["/2025/08/03/GaussDB(DWS)数据库-导入导出篇/index.html","ecfd20b7ed605fe0b9a99bce326defac"],["/2025/08/03/GaussDB(DWS)数据库-开发应用篇/index.html","58f0caa25db12135052a1dbf8ff70f9c"],["/2025/08/03/GaussDB(DWS)数据库-数据库管理篇/index.html","3a55e3e9d3b6a6a4f20543198a199243"],["/2025/08/04/GaussDB(DWS)数据库-巡检运维篇/index.html","843ada4f681141e71c196dc54923c297"],["/2025/08/04/GaussDB(DWS)数据库-性能调优和开发实践篇/index.html","a1959c73053e51a0109397dce0c56aa5"],["/2025/08/04/GaussDB(DWS)数据库-湖仓一体/index.html","6e1b7295d1d33a3851e183a57e6c04bf"],["/2025/08/04/GaussDB(DWS)数据库-集群管理篇/index.html","baee52380e876909204f2fdf1b2bbb35"],["/2025/08/18/昇思MindSpore基础教程/index.html","448787eba59a9869ddc3534d59174fa7"],["/2025/08/25/PyTorch基础教程及注意事项-基础篇/index.html","d136f0224a628b74c8a63b44ce8aa0d6"],["/2025/08/25/PyTorch基础教程及注意事项-数据和模型篇/index.html","0953730adef62fa89dd08c860622636a"],["/2025/08/25/PyTorch基础教程及注意事项-神经网络篇/index.html","8809431f9df852f5b40a06d80be11d1d"],["/2025/09/11/项目管理十大要点/index.html","b314bae23b43218be0d750149e5ac134"],["/2025/09/12/专利基础知识整理/index.html","8ca33b9ef83f5164079e9e69248949ed"],["/2025/09/13/Git使用指南/index.html","091992edf4575260dba29ff3f86cb84c"],["/2025/09/13/Python技巧-magic命令/index.html","c5cdce99e4e13d4f5d8cb2fe333dfc7d"],["/2025/09/14/GPU使用经验总结/index.html","140da75c9c541c660334597da3b13383"],["/2025/09/14/Prompt Engineering(提示词工程)实施总结/index.html","d1c8594e3047a23c7efcd9c9e2c9883a"],["/2025/09/14/Prompt Engineering(提示词工程)应用实践-Prompt自优化框架/index.html","0a757c36fe092390cca06621b31d3071"],["/2025/09/14/算法文档编写要点/index.html","8ea9de7dfcd23cf506f2891aff67f07c"],["/2025/09/15/FastAPI使用注意事项/index.html","eb49bcdab7123f5aa10b4b289f0e8634"],["/2025/09/16/可解释人工智能及其研究-SHAP算法应用篇/index.html","094fd0e4ec99331850603a4bf5829a21"],["/2025/09/16/可解释人工智能及其研究-SHAP算法说明篇/index.html","dc1d4f7c3e429938dc933a8ebb7936e7"],["/2025/09/16/可解释人工智能及其研究-基础篇/index.html","e6b692de68fb8817e68022760a842dc0"],["/2025/09/16/统计指数理论及其应用/index.html","4a72d7fe7f87475b9a57f0be7c096dfb"],["/2025/09/17/AI应用实践-Text2SQL(NL2SQL, Natural Language to SQL)/index.html","6c50fc4cdf2314822b174bb4effc7b00"],["/2025/09/18/AI应用实践-智能BI(智能问数与智能数据分析)/index.html","c6817b59d26b7a43849f66358273ed13"],["/2025/09/30/神经网络研究-Transformer架构/index.html","b22815804bcde13d1129e863485ef858"],["/2025/10/01/大模型微调(Tuning)实践/index.html","f38dc8b7d53c3938bd9d1e54c0d70457"],["/about/index.html","77c1f64e67c852eb9d40bd741916ddeb"],["/archives/2025/04/index.html","4c684ec70d842b6e2621c83f8fb9f0a7"],["/archives/2025/08/index.html","bbd223a55c7b769f22f39fd83da13914"],["/archives/2025/08/page/2/index.html","9a427c04a0e705568470d060a40c4653"],["/archives/2025/09/index.html","f8547054ea4c54787bffc6fe562ca957"],["/archives/2025/09/page/2/index.html","5652e9996d1d756aa2aae4ef9efb2bfc"],["/archives/2025/10/index.html","eaea0573c867f85d5c152157e27c32d1"],["/archives/2025/index.html","71643b9c7820a6aa00f4bc4ac3f892c6"],["/archives/2025/page/2/index.html","54d23fdf50d0d6c4fb6a7c430a3aad1c"],["/archives/2025/page/3/index.html","39154a6e8b63881136c707dce1a8ae24"],["/archives/index.html","825f0cf830856f234f589f8bc12792b9"],["/archives/page/2/index.html","edbe8eb38308318749d983cb71f14d6b"],["/archives/page/3/index.html","b5261584fbbc2fd3875f9f0240eacd9c"],["/categories/AI/index.html","5b87fb8d946261ecccb02b28bd4a6681"],["/categories/API/index.html","46457595e4ffed8a3f0731a34650c0c3"],["/categories/GPU/index.html","12a390b32da46dd03948f268ecfed664"],["/categories/Git/index.html","a83a24321163daa33a719efc3290d92a"],["/categories/Python/index.html","6a2646c7a13d60493d407574fd9fd05d"],["/categories/index.html","4485610636c59fad62a5bbad94db2dcc"],["/categories/专利/index.html","ac39f7b4421088df24b6d9015936c15e"],["/categories/应用/index.html","677466d3e4c9b2bb996674bae76d02ee"],["/categories/数学/index.html","457b11a9743263d4d0f4666480a6663e"],["/categories/数据/index.html","26620174e015b0ef70c4d6fb7d74b043"],["/categories/测试/index.html","26c4e8932a40085b5e179b28990f3ae7"],["/categories/算法/index.html","2c6ed5052ecf8bcc13e8c352cfce7f18"],["/categories/项目管理/index.html","dc1f0d1540dcc6a2926ae0bc19e422fc"],["/contact/contact.html","40a898a6f3b9c6233afd75226b876266"],["/contact/index.html","40a898a6f3b9c6233afd75226b876266"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/dark.css","2819dda5ece71a30f2f6f5b27a257cd3"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","15de7dbbe767a3a063bc244b8eb3cd6b"],["/css/matery.css","ef7944e8f33588d03638e3ca690ef6f5"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","16f5d4d84047b4390fddbcac1df17b22"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","fd2bae0127ae7225e80507c30f879376"],["/friends/index.html","288b199aacc9fd77fe557114edb864f1"],["/index.html","e8b9d73b16057ef7c51d20c129690e1b"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","9f67a1c1ca204dd3257ba7cd883d77fb"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","607d70d99b9efd8a7230d14a5486fc70"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","842179eb819c78331f239dd148de48a3"],["/libs/materialize/materialize.min.js","3413ad1da31c4b6a7a4392e9271d481f"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","7374fc7ae00096b6165420ed4f72b84f"],["/medias/banner/0.jpg","306003d8042084347393c395cf75c56d"],["/medias/banner/1.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/medias/banner/2.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["/medias/banner/3.jpg","8c7505b632239a7c4e39f1667c3928b0"],["/medias/banner/4.jpg","86b8effb2e19b0251f53a7dd8869dc8e"],["/medias/banner/5.jpg","ac669fc927093822996b6bfbafc9c3a0"],["/medias/banner/6.jpg","a939c8c257fad2cf32ff4db949f6d578"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","fd2bae0127ae7225e80507c30f879376"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/page/2/index.html","337ce4744bba0586552a743a08d3b3b1"],["/page/3/index.html","afa484c6144fd508436ecba380c5532c"],["/sw-register.js","344430293513e42db6f0f67f6e1e7471"],["/tags/AI/index.html","c25360849a6d3d264dcfc2586424e2b2"],["/tags/AI/page/2/index.html","e95274f400bbba9130d7474354472214"],["/tags/API/index.html","913ff2a4e44c72573b8cd4b0ef79f7d0"],["/tags/BI/index.html","003ad9e07934cd05a5e3fd24bc98ccc7"],["/tags/GPU/index.html","e415bdd8cbf2ade54803283e26906f33"],["/tags/GaussDB-DWS/index.html","fd3db669f15011fff7a80e90e1cd4123"],["/tags/Git/index.html","97e2670f05a3a897b22ea728d8c9d699"],["/tags/Markdown/index.html","62f57e933b9fb3729641a165a13dbba4"],["/tags/MindSpore/index.html","6583228d076f9f4167141e873d4448fb"],["/tags/NL2SQL/index.html","d8cadb65284b3f44fd002b2bd1a09d67"],["/tags/Prompt-Engineering/index.html","44e3ebbc1e0daa098a87e28cc5c3deac"],["/tags/PyTorch/index.html","9e2b53c29c0bf7113c6f9710f4bd312c"],["/tags/Python/index.html","fcf7f72ae3627e7510666c61eebcd9ae"],["/tags/RESful-API/index.html","78f10b0006d3f04c9ae30d51ff04d681"],["/tags/SHAP算法/index.html","b1f7fe0f96e6c70771b318bd943000d9"],["/tags/Text2SQL/index.html","a8fbf5d4bc3a5dba37569026a8543667"],["/tags/Transformer/index.html","d721c400026e1b60c311d84963f61da9"],["/tags/Typora/index.html","1fcd2af4a98c3ad898e2c48868e3b5b2"],["/tags/Web框架/index.html","487c2f44b43890e3918a87ca35cf5910"],["/tags/index.html","c7aaf9629b70c90ba0525954f75c423a"],["/tags/magic/index.html","06f275aff70be02f73fa0a85c9cb902c"],["/tags/专利/index.html","20f9e22bc35f754e0b6b9795f6496d44"],["/tags/可解释/index.html","0b9964da622bd82bc5bd6795c29726a0"],["/tags/基础/index.html","5ff9e4c4ad24745c46ecc153488d6b1f"],["/tags/大模型微调/index.html","f38580fe8ce5e7ef1324db058e46ec9e"],["/tags/应用/index.html","90b8b5e60f13d0f8182a37aa85869ba4"],["/tags/指数理论/index.html","1cfe2ff6c7497e0ed5bde19b94428fd3"],["/tags/数学/index.html","02d51a6b7dbff5ab999e9aa112febf8e"],["/tags/数据/index.html","b09e031ad752b50538c98913ac4c3f6c"],["/tags/数据仓库/index.html","0b7b4cc3605ab544c0076c488c9fee0a"],["/tags/数据库/index.html","6567bb565daf8c97bc5c57928fe7334e"],["/tags/文档管理/index.html","74831ba03ca862cf5b673d2859bc41e3"],["/tags/框架/index.html","b3909870553ace961e50a033e4ca628e"],["/tags/深度学习/index.html","76c6f3b85c47834cd4b8cd9cb4d8c055"],["/tags/版本控制/index.html","f5cc17fad9d3a7277d266ebf8c44c671"],["/tags/知识产权/index.html","c7765892c96485ac33ce1b16dd08b54c"],["/tags/神经网络/index.html","aed89544a714602d8176b049593aae3d"],["/tags/算法/index.html","7c332bafb23dc3b6f7f09fcb25b8631c"],["/tags/算法/page/2/index.html","9471f6db28e9400cb17ce7e0e5143ad2"],["/tags/管理/index.html","19e8106c10babd5ad559a93e669f0ab6"],["/tags/经验总结/index.html","ca8f2e3266e95d68d339a92561972938"],["/tags/统计/index.html","78bec844c48064981cd767ae1b12cdf8"],["/tags/项目管理/index.html","bd26ba8126f416d0b37cdbec2831c10b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
