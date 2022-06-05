import inherited from 'mastodon/locales/zh-CN.json';

const messages = {
  'account.add_account_note': '为 @{name} 添加备注',
  'account.disclaimer_full': '以下信息可能无法完整代表你的个人资料。',
  'account.follows': '正在关注',
  'account.suspended_disclaimer_full': '该用户已被封禁。',
  'account.view_full_profile': '查看完整资料',
  'account_note.cancel': '取消',
  'account_note.edit': '编辑',
  'account_note.glitch_placeholder': '暂无备注',
  'account_note.save': '保存',
  'advanced_options.icon_title': '高级选项',
  'advanced_options.local-only.long': '不要发布嘟文到其他实例',
  'advanced_options.local-only.short': '本地模式',
  'advanced_options.local-only.tooltip': '这条嘟文仅限于本实例',
  'advanced_options.threaded_mode.long': '发嘟时自动打开回复',
  'advanced_options.threaded_mode.short': '线程模式',
  'advanced_options.threaded_mode.tooltip': '线程模式已启用',
  'boost_modal.missing_description': '这条嘟文未包含媒体描述',
  'column.favourited_by': '喜欢',
  'column.heading': '标题',
  'column.reblogged_by': '转嘟',
  'column.subheading': '其他选项',
  'column.toot': '嘟文和回复',
  'column_header.profile': '个人资料',
  'column_subheading.lists': '列表',
  'column_subheading.navigation': '导航',
  'community.column_settings.allow_local_only': '只显示本地模式嘟文',
  'compose.attach': '附上...',
  'compose.attach.doodle': '画点什么',
  'compose.attach.upload': '上传文件',
  'compose.content-type.html': 'HTML',
  'compose.content-type.markdown': 'Markdown',
  'compose.content-type.plain': '纯文本',
  'compose_form.poll.multiple_choices': '允许多选',
  'compose_form.poll.single_choice': '允许单选',
  'compose_form.spoiler': '隐藏为内容警告',
  'confirmation_modal.do_not_ask_again': '下次不显示确认窗口',
  'confirmations.discard_edit_media.confirm': '确认',
  'confirmations.discard_edit_media.message': '有未保存的媒体描述或预览，确认要关闭？',
  'confirmations.missing_media_description.confirm': '确认',
  'confirmations.missing_media_description.edit': '编辑',
  'confirmations.missing_media_description.message': '你没有为一种或多种媒体撰写描述。请考虑为视障人士添加描述。',
  'confirmations.unfilter': '关于此过滤后嘟文的信息',
  'confirmations.unfilter.author': '作者',
  'confirmations.unfilter.confirm': '查看',
  'confirmations.unfilter.edit_filter': '编辑过滤器',
  'confirmations.unfilter.filters': '应用 {count, plural, one {过滤器} other {过滤器}}',
  'content-type.change': '内容类型 ',
  'direct.conversations_mode': '对话模式',
  'direct.timeline_mode': '时间线模式',
  'endorsed_accounts_editor.endorsed_accounts': '推荐用户',
  'favourite_modal.combo': '下次你可以按 {combo} 跳过这个',
  'getting_started.onboarding': '参观一下',
  'home.column_settings.advanced': '高级',
  'home.column_settings.filter_regex': '按正则表达式过滤',
  'home.column_settings.show_direct': '显示私信',
  'home.settings': '列表设置',
  'keyboard_shortcuts.bookmark': '书签',
  'keyboard_shortcuts.secondary_toot': '使用二级隐私设置发送嘟文',
  'keyboard_shortcuts.toggle_collapse': '折叠或展开嘟文',
  'layout.auto': '自动模式',
  'layout.current_is': '你目前的布局是：',
  'layout.desktop': '桌面模式',
  'layout.hint.auto': '根据“启用高级 Web 界面”设置和屏幕大小自动选择布局。',
  'layout.hint.desktop': '“使用多列布局，无论“启用高级 Web 界面”设置和屏幕大小如何。',
  'layout.hint.single': '使用单列布局，无论“启用高级 Web 界面”设置和屏幕大小如何。',
  'layout.single': '移动模式',
  'media_gallery.sensitive': '敏感内容',
  'moved_to_warning': '此帐户已被标记为移至 {moved_to_link}，并且似乎没有收到新关注者。',
  'navigation_bar.app_settings': '应用选项',
  'navigation_bar.featured_users': '推荐用户',
  'navigation_bar.misc': '杂项',
  'notification.markForDeletion': '标记以删除',
  'notification_purge.btn_all': '全选',
  'notification_purge.btn_apply': '清除已选',
  'notification_purge.btn_invert': '反向选择',
  'notification_purge.btn_none': '取消全选',
  'notification_purge.start': '进入通知清除模式',
  'notifications.clear': '清除所有通知',
  'notifications.marked_clear': '清除选择的通知',
  'notifications.marked_clear_confirmation': '你确定要永久清除所有选择的通知吗？',
  'onboarding.done': '完成',
  'onboarding.next': '下一个',
  'onboarding.page_five.public_timelines': '本地时间线显示来自 {domain} 中所有人的公开嘟文。跨站时间线显示了 {domain} 用户关注的每个人的公开嘟文。这些被称为公共时间线，是发现新朋友的好方法。',
  'onboarding.page_four.home': '你的主页时间线会显示你关注的人的嘟文。',
  'onboarding.page_four.notifications': '通知栏显示某人与你互动的内容。',
  'onboarding.page_one.federation': '{domain} 是 Mastodon 的一个“实例”。Mastodon 是一个由独立服务器组成的，通过不断联合形成的社交网络。我们称这些服务器为实例。',
  'onboarding.page_one.handle': '你位于 {domain}，因此你的完整用户名是 {handle} 。',
  'onboarding.page_one.welcome': '欢迎来到 {domain}！',
  'onboarding.page_six.admin': '实例的管理员是 {admin}。',
  'onboarding.page_six.almost_done': '就快完成了...',
  'onboarding.page_six.appetoot': '尽情享用吧！',
  'onboarding.page_six.apps_available': '有适用于 iOS、Android 和其他平台的应用程序。',
  'onboarding.page_six.guidelines': '社区准则',
  'onboarding.page_six.read_guidelines': '请阅读 {domain} 的 {guidelines}！',
  'onboarding.page_six.various_app': '应用程序',
  'onboarding.page_three.profile': '编辑你的个人资料，更改你的头像、个人简介和昵称。在那里，你还会发现其他设置。',
  'onboarding.page_three.search': '使用搜索栏查找用户并查看标签，例如 #illustration 和 #introductions。要查找不在此实例中的用户，请使用他们的完整用户名。',
  'onboarding.page_two.compose': '在撰写框中撰写嘟文。你可以使用下方图标上传图像、更改隐私设置和添加内容警告。',
  'onboarding.skip': '跳过',
  'settings.always_show_spoilers_field': '始终显示内容警告框',
  'settings.auto_collapse': '自动折叠',
  'settings.auto_collapse_all': '所有',
  'settings.auto_collapse_lengthy': '长嘟文',
  'settings.auto_collapse_media': '带媒体文件的嘟文',
  'settings.auto_collapse_notifications': '通知',
  'settings.auto_collapse_reblogs': '转嘟',
  'settings.auto_collapse_replies': '回复',
  'settings.close': '关闭',
  'settings.collapsed_statuses': '折叠嘟文',
  'settings.compose_box_opts': '撰写框',
  'settings.confirm_before_clearing_draft': '在覆盖正在写入的嘟文之前显示确认对话框',
  'settings.confirm_boost_missing_media_description': '在转嘟缺少媒体描述的嘟文之前显示确认对话框',
  'settings.confirm_missing_media_description': '在发送缺少媒体描述的嘟文之前显示确认对话框',
  'settings.content_warnings': '内容警告',
  'settings.content_warnings.regexp': '正则表达式',
  'settings.content_warnings_filter': '不会自动展开的内容警告：',
  'settings.enable_collapsed': '启用折叠嘟文',
  'settings.enable_content_warnings_auto_unfold': '自动展开内容警告',
  'settings.filtering_behavior': '过滤器行为',
  'settings.filtering_behavior.cw': '仍然显示嘟文，并在内容警告中添加过滤词',
  'settings.filtering_behavior.drop': '完全隐藏过滤的嘟文',
  'settings.filtering_behavior.hide': '显示“已过滤”并添加一个按钮来显示原因',
  'settings.filtering_behavior.upstream': '像原版 Mastodon 一样显示“已过滤”',
  'settings.filters': '过滤器',
  'settings.general': '一般',
  'settings.hicolor_privacy_icons': '彩色隐私图标 ',
  'settings.hicolor_privacy_icons.hint': '以明亮且易于区分的颜色显示隐私图标',
  'settings.image_backgrounds': '图片背景',
  'settings.image_backgrounds_media': '预览折叠嘟文的媒体文件',
  'settings.image_backgrounds_users': '为折叠嘟文附加图片背景',
  'settings.inline_preview_cards': '外部链接的内嵌预览卡片',
  'settings.layout': '布局：',
  'settings.layout_opts': '布局选项',
  'settings.media': '媒体',
  'settings.media_fullwidth': '全宽媒体预览',
  'settings.media_letterbox': '信箱媒体',
  'settings.media_letterbox_hint': '缩小媒体以填充图像容器而不是拉伸和裁剪它们',
  'settings.media_reveal_behind_cw': '默认显示内容警告后的敏感媒体',
  'settings.navbar_under': '底部导航栏（仅限于移动模式）',
  'settings.notifications.favicon_badge': '未读通知网站图标',
  'settings.notifications.favicon_badge.hint': '将未读通知添加到网站图标',
  'settings.notifications.tab_badge': '未读通知图标',
  'settings.notifications.tab_badge.hint': '当通知栏未打开时，显示未读通知图标',
  'settings.notifications_opts': '通知选项',
  'settings.pop_in_left': '左边',
  'settings.pop_in_player': '启用悬浮播放器',
  'settings.pop_in_position': '悬浮播放器位置：',
  'settings.pop_in_right': '右边',
  'settings.preferences': '用户选项',
  'settings.prepend_cw_re': '回复时在内容警告前加上“re:”',
  'settings.preselect_on_reply': '回复时预先选择用户名',
  'settings.preselect_on_reply_hint': '回复与多个参与者的对话时，预先选择第一个用户名',
  'settings.rewrite_mentions': '重写嘟文中的提及',
  'settings.rewrite_mentions_acct': '重写为用户名和域名（当帐户为远程时）',
  'settings.rewrite_mentions_no': '不要重写',
  'settings.rewrite_mentions_username': '重写为用户名',
  'settings.show_action_bar': '在折叠的嘟文中显示操作按钮',
  'settings.show_content_type_choice': '允许你在撰写嘟文时选择格式类型',
  'settings.show_reply_counter': '显示回复的大致数量',
  'settings.side_arm': '辅助发嘟按钮：',
  'settings.side_arm.none': '无',
  'settings.side_arm_reply_mode': '当回复嘟文时：',
  'settings.side_arm_reply_mode.copy': '复制被回复嘟文的隐私设置',
  'settings.side_arm_reply_mode.keep': '保留辅助发嘟按钮以设置隐私',
  'settings.side_arm_reply_mode.restrict': '将隐私设置限制为正在回复的那条嘟文',
  'settings.swipe_to_change_columns': '允许滑动以在列之间切换（仅限移动模式）',
  'settings.tag_misleading_links': '标记误导性链接',
  'settings.tag_misleading_links.hint': '将带有目标网页链接的视觉指示添加到每个未明确的链接',
  'settings.wide_view': '宽视图（仅限于桌面模式）',
  'settings.wide_view_hint': '拉伸列宽以更好地填充可用空间。',
  'status.collapse': '折叠',
  'status.has_audio': '附带音频文件',
  'status.has_pictures': '附带图片文件',
  'status.has_preview_card': '附带预览卡片',
  'status.has_video': '附带视频文件',
  'status.hide': '隐藏内容',
  'status.in_reply_to': '此嘟文是回复',
  'status.is_poll': '此嘟文是投票',
  'status.local_only': '此嘟文仅本实例可见',
  'status.sensitive_toggle': '点击查看',
  'status.show_filter_reason': '（显示原因）',
  'status.uncollapse': '不折叠',
  'upload_modal.applying': '正在应用...',
  'web_app_crash.change_your_settings': '更改 {settings}',
  'web_app_crash.content': '你可以尝试这些：',
  'web_app_crash.debug_info': '调试信息',
  'web_app_crash.disable_addons': '禁用浏览器插件或本地翻译工具',
  'web_app_crash.issue_tracker': '问题追踪器',
  'web_app_crash.reload': '刷新',
  'web_app_crash.reload_page': '{reload} 此页面',
  'web_app_crash.report_issue': '将错误报告给 {issuetracker}',
  'web_app_crash.settings': '设置',
  'web_app_crash.title': '抱歉，Mastodon 出了点问题。',
};

export default Object.assign({}, inherited, messages);
