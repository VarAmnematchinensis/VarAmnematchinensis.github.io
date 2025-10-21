/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/04/25/hello-world/index.html","96a32ab95465317cd669fc3a0b006f27"],["/2025/08/03/GaussDB(DWS)数据库-基础篇/index.html","8df536a996e04e44360d86e21f695a39"],["/2025/08/03/GaussDB(DWS)数据库-导入导出篇/index.html","1be89c2e2a404132961474da87e32747"],["/2025/08/03/GaussDB(DWS)数据库-开发应用篇/index.html","3daf1d801b28bbbc2bb0cdc9ddbe6ca1"],["/2025/08/03/GaussDB(DWS)数据库-数据库管理篇/index.html","7e4a682b6630925e85a174227d6af52f"],["/2025/08/04/GaussDB(DWS)数据库-巡检运维篇/index.html","55efe3b6f22c9f9bbd7d09225a62677e"],["/2025/08/04/GaussDB(DWS)数据库-性能调优和开发实践篇/index.html","7e49f2788a781a4fee4903aa51b32e83"],["/2025/08/04/GaussDB(DWS)数据库-湖仓一体/index.html","0798462e33e62898e1ce50257ee54ccc"],["/2025/08/04/GaussDB(DWS)数据库-集群管理篇/index.html","ae6316a92e9c7b71b93aa0dc60256047"],["/2025/08/18/昇思MindSpore基础教程/index.html","4a7f68d1b11d5a66f502d9a477ecebf5"],["/2025/08/25/PyTorch基础教程及注意事项-基础篇/index.html","87fd9dede33caa74225479ecaf6e4d40"],["/2025/08/25/PyTorch基础教程及注意事项-数据和模型篇/index.html","f54dfa664d294ebbb2b9ebcfda63b8e9"],["/2025/08/25/PyTorch基础教程及注意事项-神经网络篇/index.html","e5688e2cb6206a585f3877e36bbe18ca"],["/2025/09/11/项目管理十大要点/index.html","c695a83f51db663ec34ca07d2920f3bf"],["/2025/09/12/专利基础知识整理/index.html","10b3716a88309e132ff5fd7827f9d404"],["/2025/09/13/Git使用指南/index.html","ce6ff8532d20e87b6ada27492071eb32"],["/2025/09/13/Python技巧-magic命令/index.html","f83ff0a63b26a9a5fe094bed5768a7e1"],["/2025/09/14/GPU使用经验总结/index.html","42a58405341ed9efd8d0ce357937760d"],["/2025/09/14/Prompt Engineering(提示词工程)实施总结/index.html","e2a6853afbae13fc188fe51844bfa09b"],["/2025/09/14/Prompt Engineering(提示词工程)应用实践-Prompt自优化框架/index.html","81f93eac47023324b77715f348c2021b"],["/2025/09/14/算法文档编写要点/index.html","9fbd169d231fbebe2cb05ba4f4963345"],["/2025/09/15/FastAPI使用注意事项/index.html","abf006f1e8a58bf78e2c2beb38da38e9"],["/2025/09/16/可解释人工智能及其研究-SHAP算法应用篇/index.html","e97e4e2d543686646d637396b1fac225"],["/2025/09/16/可解释人工智能及其研究-SHAP算法说明篇/index.html","c4038b2133b0c0a1710cfd130c16f3eb"],["/2025/09/16/可解释人工智能及其研究-基础篇/index.html","c2b0aab8cca166be7d4ffc838ec6264b"],["/2025/09/16/统计指数理论及其应用/index.html","31de65d297754e4c9ab24ca74da8c2ba"],["/2025/09/17/AI应用实践-Text2SQL(NL2SQL, Natural Language to SQL)/index.html","81799ba9c322bde4d3672c87011473f5"],["/2025/09/18/AI应用实践-智能BI(智能问数与智能数据分析)/index.html","780d2e4c3be731ee168ad0e2f55af603"],["/2025/09/30/神经网络研究-Transformer架构/index.html","fded8d752808afc692bbbacefb82ff07"],["/2025/10/01/大模型微调(Tuning)实践-基础篇/index.html","f439e508096c4a3834b21b3c4a1186a0"],["/2025/10/02/大模型微调(Tuning)实践-OpenAI的RAG和微调经验总结/index.html","ccda8ae33648fba50b040b9ea3ee53e4"],["/2025/10/03/大模型微调(Tuning)实践-LLaMA Factory工具实践篇/index.html","58682ceac5f5411bd6b70037d86cab35"],["/about/index.html","6344bd5a35460e5d2e8f6fd9c81934ac"],["/archives/2025/04/index.html","d23b1e181a7c189b74b7c279391092e9"],["/archives/2025/08/index.html","5492d09c23eabcb77418eebbba51aeea"],["/archives/2025/08/page/2/index.html","19becf165cb862f6cb8b142e7888d234"],["/archives/2025/09/index.html","5269eb4e906fdba856607df1942fc194"],["/archives/2025/09/page/2/index.html","0ca354bdd83cfc79a63f56e6670597af"],["/archives/2025/10/index.html","cebff2dbf02c7a34b47276f80f03ce53"],["/archives/2025/index.html","56a0a5e16a09a7ba57875f10d9d6bbb6"],["/archives/2025/page/2/index.html","bc4340c52933f5096e6078c73417af64"],["/archives/2025/page/3/index.html","50656a57f2ae68d2035cab4c78bccf31"],["/archives/2025/page/4/index.html","a8c4939936ab6ac2a704b2a0152f6479"],["/archives/index.html","48c6ba1e1cc51d6b6a7f64deace20f77"],["/archives/page/2/index.html","627cc3cfe76a7a908c3156b210e1c338"],["/archives/page/3/index.html","279c792340e272658d66f174129f2708"],["/archives/page/4/index.html","d44b2533ede7b7362ce97eefc930d03e"],["/categories/AI/index.html","883077460be312ad195bca01423b0523"],["/categories/API/index.html","584ac95ee063cd6c9727a75ef7141704"],["/categories/GPU/index.html","a6b88ffd8de0151a2058eadea8cd4a8d"],["/categories/Git/index.html","157d488f0b0a0c03d219dc92d69fdd00"],["/categories/Python/index.html","59cec4ad190737521106e86e92a06d42"],["/categories/index.html","3ae4d92f0e144e40d2a2124e121f8a28"],["/categories/专利/index.html","1904ceddf91915800732f07899694eb7"],["/categories/应用/index.html","14ce2b5a8773d88c994dbd8c45796460"],["/categories/数学/index.html","b9eb6d1ea24b5f275b9c33f51183d7f9"],["/categories/数据/index.html","45bdb2f846772154d44477dde419b4a7"],["/categories/测试/index.html","73dcbb4a0ecd3ddfc35149d7e37e9b8f"],["/categories/算法/index.html","f392d771333ef14ec3613758eb60866c"],["/categories/项目管理/index.html","898a2f4b5af45a22d4f4230422e7f283"],["/contact/contact.html","eabf381b428cb8f90db960f4bef69769"],["/contact/index.html","eabf381b428cb8f90db960f4bef69769"],["/css/barrager.css","c3faa9826b45bdd738e401f0a9c4192f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/dark.css","2819dda5ece71a30f2f6f5b27a257cd3"],["/css/gallery.css","995e260b3cd2e85de9f9892b11239361"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/indexcover.css","15de7dbbe767a3a063bc244b8eb3cd6b"],["/css/matery.css","ef7944e8f33588d03638e3ca690ef6f5"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/css/post.css","16f5d4d84047b4390fddbcac1df17b22"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/reward.css","8c7d18c8fa6b0e82cc75a867e7e533da"],["/favicon.png","fd2bae0127ae7225e80507c30f879376"],["/friends/index.html","bec43c22d56537d330e7a7e47cf9b639"],["/index.html","d028b49e1f806fa9be06df058ecec63b"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/matery.js","9f67a1c1ca204dd3257ba7cd883d77fb"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","607d70d99b9efd8a7230d14a5486fc70"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","59e626fe99d31dfded1e674a4089e0c8"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-brands-400.woff2","5531dd3a7705ec68a6c5f5d02b25da6f"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-regular-400.woff2","e42bcafcb7cc5002daa805140064bf40"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-solid-900.woff2","be4dccbe54eea47a0ad5d7bb60a3c17d"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/awesome/webfonts/fa-v4compatibility.woff2","eca6332a7e5060488f5fb896747fe50a"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","a2d42584292f64c5827e8b67b1b38726"],["/libs/gitalk/gitalk.css","8476031a633732dff9875feae0890070"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","842179eb819c78331f239dd148de48a3"],["/libs/materialize/materialize.min.js","3413ad1da31c4b6a7a4392e9271d481f"],["/libs/mermaid/mermaid.js","f3687bf99ec4a8b6608d45d2809eab00"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","e8f0173e7c5216e5359587a88a570b77"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/avatar.jpg","7374fc7ae00096b6165420ed4f72b84f"],["/medias/banner/0.jpg","306003d8042084347393c395cf75c56d"],["/medias/banner/1.jpg","9269002d0873d0e0fe9c9384507a0f81"],["/medias/banner/2.jpg","9d5259c1c229c7b2a7ea813b5246ce26"],["/medias/banner/3.jpg","8c7505b632239a7c4e39f1667c3928b0"],["/medias/banner/4.jpg","86b8effb2e19b0251f53a7dd8869dc8e"],["/medias/banner/5.jpg","ac669fc927093822996b6bfbafc9c3a0"],["/medias/banner/6.jpg","a939c8c257fad2cf32ff4db949f6d578"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","f751cba3a4cd6381611bb4ec97d35e77"],["/medias/featureimages/1.jpg","d440f1a8faa3af050511b79ae30a10b0"],["/medias/featureimages/10.jpg","daaa0bfde5bade9fd47a9828a89c1044"],["/medias/featureimages/11.jpg","c613fbd6f7fadb8e65fdae620d89d277"],["/medias/featureimages/12.jpg","df9abf1fa933cee751d211828c35e4f5"],["/medias/featureimages/13.jpg","677c90f32232dd162b9c504ff176b100"],["/medias/featureimages/14.jpg","891ea5f9186f889adef7b215d9be9948"],["/medias/featureimages/15.jpg","3cf1acc3d317690beae0520a1e606b30"],["/medias/featureimages/16.jpg","403a5973092edf7b1fc9cfb809ed4b05"],["/medias/featureimages/17.jpg","a88c2a1cc175f75b8b60f3224026b4de"],["/medias/featureimages/18.jpg","d8104647c594f21438cbc17331c57025"],["/medias/featureimages/19.jpg","86258814e4374b85adac9bd8235ad110"],["/medias/featureimages/2.jpg","d2f7104d393ee322de0cba7313eddf74"],["/medias/featureimages/20.jpg","0ec7a7cc344f3d47dbc556ea312a365f"],["/medias/featureimages/21.jpg","7202402f259237ea1f3f6bb82d208888"],["/medias/featureimages/22.jpg","6b1b1da789eecd376a5e6843314f26ad"],["/medias/featureimages/23.jpg","95ea042be75c28794ddca649388ad3c7"],["/medias/featureimages/3.jpg","afcee76cc47ff729c484202e201cafd4"],["/medias/featureimages/4.jpg","ddd80ccca8d84079255bbfbf4244debd"],["/medias/featureimages/5.jpg","eeb46fbd8f9c6999a2f3fbdcf34e8b3e"],["/medias/featureimages/6.jpg","ae4562052cf07bc1912d5fd90e00b2ce"],["/medias/featureimages/7.jpg","af5b8a1b0fbab59e68a69005b2a0eeb7"],["/medias/featureimages/8.jpg","6d9136c0bf542e136dd70a6a7c97521b"],["/medias/featureimages/9.jpg","52e8f9aca543d2d4838c14bce33ecee1"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/images/01.jpg","df3a6be5078170d97b0fa7af440c00d5"],["/medias/images/02.jpg","e48d5fab83ae2f90e2e6f0eef22ec85c"],["/medias/images/03.jpg","01d3b8abfc97d822ef159033b3cec89f"],["/medias/logo.png","fd2bae0127ae7225e80507c30f879376"],["/medias/reward/alipay.jpg","04870d77ea3c0385dca3679c36fca0fa"],["/medias/reward/wechat.png","643f8e9c3d85731ada4b20db1924fdc9"],["/page/2/index.html","36625c818e78967b08d657618f220ce7"],["/page/3/index.html","2c5af834d32045546eda7be5938df0bc"],["/sw-register.js","bb62f87437272a691d9d8cdc5ae63f8e"],["/tags/AI/index.html","ee09d781221642142084d37c6c430bb9"],["/tags/AI/page/2/index.html","17f94668580dcd131d403353d474caaf"],["/tags/API/index.html","4dcc0b8ceba1b646334ad15a77ae90cc"],["/tags/BI/index.html","230c40e7a98e7d98e6e7c6bafa16f7db"],["/tags/GPU/index.html","b07c70618cbef38f3c94c8df2918f057"],["/tags/GaussDB-DWS/index.html","0eb42247251689f2bbf26a292c4b49b2"],["/tags/Git/index.html","5558ebe7061b45fe4bc88478f8cee63a"],["/tags/LLaMA-Factory/index.html","aefba2171081a8809e078eb8e2687a61"],["/tags/Markdown/index.html","453985316b92bd31dadecf2634c18988"],["/tags/MindSpore/index.html","a9c1101de480894f961a216992f871c7"],["/tags/NL2SQL/index.html","48fb1606f2868f574242a6646e22a905"],["/tags/OpenAI/index.html","d9864655e23e7f62216d655bad401ef9"],["/tags/Prompt-Engineering/index.html","d2a3aa8092e29eaf5d71415e5629eed5"],["/tags/PyTorch/index.html","e3f031d5e184704058b1f13817ab54a3"],["/tags/Python/index.html","1f94c0eb5fd66dd4649ce92b03e4ace1"],["/tags/RAG/index.html","2a6048134be406a201c62693925daf92"],["/tags/RESful-API/index.html","ca882ca56936fb38f38431eab7673aa2"],["/tags/SHAP算法/index.html","fdc174f94739a3b375c77ba9d2fe9620"],["/tags/Text2SQL/index.html","5ec0db3598aa6d2fb8241e3453b9537a"],["/tags/Transformer/index.html","43d48ad8b331c7b26816af0531d98cce"],["/tags/Typora/index.html","5119a1bfb6c2c1f4e2eaaf48a6eb8988"],["/tags/Web框架/index.html","4b05421c74ef09fee2bd018809912241"],["/tags/index.html","c7c192df4b804b0a5874ab049e2e8490"],["/tags/magic/index.html","7187c158d21fa8e2e4c504d63134fc9f"],["/tags/专利/index.html","c11df11a979a71a8df36dd1f1ef9a6ac"],["/tags/可解释/index.html","7935cbb5cccb54f9bfb0ced02a0afee0"],["/tags/基础/index.html","c85fcc2ff4e8a632bccfd368bd36d8a2"],["/tags/大模型微调/index.html","a273b8551ababfc21aa447f10dffce33"],["/tags/应用/index.html","8bf85795404a96ac36ec81f96e343ed3"],["/tags/指数理论/index.html","b44c6c786f1bca521b9feabe8abbf3fe"],["/tags/数学/index.html","bf3631ea1b856d5b8a08485114b74e10"],["/tags/数据/index.html","1c6260f4d9cd9e609ac5bbe19f2f4137"],["/tags/数据仓库/index.html","d927466a1a29bc554bda9d65f7b3df58"],["/tags/数据库/index.html","8ba76737c72e575c12e2e5eb8f4e2a4d"],["/tags/文档管理/index.html","4e8b90ed2d881fb5d167f0396fb94f07"],["/tags/框架/index.html","34730f9850572533f13f17850a5bf565"],["/tags/深度学习/index.html","8df3ae4c3d66111a0ae0f57a7610149b"],["/tags/版本控制/index.html","4d2bea01d634e083df2f9a1c0d077ad0"],["/tags/知识产权/index.html","450825ced2e481965c530f0dcc7d0002"],["/tags/神经网络/index.html","4455c10aeed372ae9fae267a08cefe8c"],["/tags/算法/index.html","d6c54b64389193a4016a378ec42a8026"],["/tags/算法/page/2/index.html","53ede4c26e778a89b14002f075b37a76"],["/tags/管理/index.html","53e88ff0c74d70626cf1a7c1b4ddd4a5"],["/tags/经验总结/index.html","03de6b9bc212ebf6c0a8f5c52b78d768"],["/tags/统计/index.html","f994d7170160d409f722ecc9530216fb"],["/tags/项目管理/index.html","2b29e8f0934806800caeede77c7e8405"]];
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
