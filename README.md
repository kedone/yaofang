## 药方 (YAWF)

YAWF（Yet Another Weibo Filter）Firefox 扩展

AMO: [https://addons.mozilla.org/zh-CN/firefox/addon/yawf/][AMO]

### 主要功能

这是一个针对网页版微博（weibo.com）的第三方增强工具，可以帮您：

* 跳过微博的兴趣导引，避免误关注大量“垃圾帐号”（该功能默认开启，无设置项）；
* 使用分组拼凑首页，让首页恢复正常的时间顺序；
* 根据关键字、作者、来源等隐藏、折叠或高亮微博；使用拖拽轻松定义过滤规则；
* 屏蔽推广、粉丝头条、投票、好友赞过、抢红包、爱问医生等各种微博；
* 清理版面上的各种模块、图标、小红点，去广告；过滤热门话题；
* 合并左右边栏的双栏模式，加宽微博宽度和加大微博字号，自定义字体；
* 去除微博间的空白，调整微博版式，重新安排微博下方按钮顺序
* 自动检查您的关注列表并告诉您发生的变化，帮您保持关注列表的干净整洁；
* 设置网页模板，自定义半透明背景色，深色导航栏，经典导航栏布局；
* 正常大小的微博缩略图尺寸，原生视频播放器；
* 以及更多功能……

扩展的设置项在网页中，您打开网页版微博时，会在右上角看到一个漏斗图标，点击即可显示扩展设置。

### 隐私与安全

* 扩展不会收集您的任何信息，扩展在使用过程中会根据需要访问微博服务器上的相关资源，此外不会进行其他网络访问；
* 扩展不会以您的名义发布微博，不会自动操作关注或取消关注，也不会加入相关功能；


### 申请的权限

扩展申请了一些特殊的权限以正常工作，包括：

* 存取您的网络数据：扩展会应用在 weibo.com 的网页上，此外扩展会针对微博的一些网络请求做过滤和处理，这包括微博、新浪的一系列域名，以及酷燃、秒拍等域名。此外去除微博广告和追踪器的功能还需要拦截一些属于阿里的域名的请求。由于需要访问的域名太多且不是很固定，所以这里申请了所有网站的访问权限。实际使用时，扩展仅会影响微博和其相关的一些域名的访问。
* 管理您的下载：扩展的批量下载功能需要该权限，扩展仅会添加下载项，不会修改下载历史或管理其他下载；
* 无限制的本地存储：扩展在本地存储了您的设置和其他一些相关的内容。

### 与用户脚本的关系

扩展由最初的用户脚本（user script）版发展而来。用户脚本在一些功能上会有局限，而扩展版可以达到更好的效果。
用户脚本需要依赖于宿主扩展（猴子）才能运行，GM 因为换了实现方式，需要大范围修改才能兼容；TM 则是私有软件，禁止用于商业用途；VM 的隐私协议又令我很不满意。所以推出这个扩展版以一次性解决所有问题。
用户脚本中一些不重要或者已经没有存在意义的功能未包含在扩展版本中，如果您认为有需要欢迎反馈缺少的功能。此外扩展版还提供了一些脚本版无法提供的功能。

目前脚本版基于本扩展实现，脚本版屏蔽了部分因为机能限制无法支持的功能，并提供了一些模拟扩展版环境的桩程序。

### 关于

扩展使用 MPL-2.0 协议开源。
您可以在脚本的 GitHub 仓库获得源代码；此外由于代码未经编译与压缩，AMO 下载的扩展解压缩后亦可直接获得脚本源代码。

[AMO]: https://addons.mozilla.org/zh-CN/firefox/addon/yawf/?src=addon-github-readme

