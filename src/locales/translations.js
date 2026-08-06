export const translations = {
  en: {
    nav: {
      features: "Features",
      commands: "Commands",
      statistics: "Statistics",
      faq: "FAQ",
      premium: "Premium", // <-- أضف هذه
      addBot: "Add Bot",
    },
    hero: {
      badge: "✨ The Ultimate Discord Management Bot",
      title1: "Build your",
      title2: "Discord Community",
      title3: "with Equinox",
      description: "Powerful moderation, economy, games, automatic replies, Islamic features, dashboards and much more in one bot.",
      addToDiscord: "Add To Discord",
      viewCommands: "View Commands",
    },
    features: {
      title: "Why Equinox?",
      subtitle: "All the tools you need to manage your community in one place.",
      items: [
        { icon: "🛡️", title: "Advanced Protection", description: "Powerful anti-spam and security systems with integrated management tools." },
        { icon: "💰", title: "Integrated Economy", description: "Currency system, transfers, daily rewards, and leaderboards." },
        { icon: "🎮", title: "Interactive Games", description: "A set of games to boost server activity and keep the community engaged." },
        { icon: "💬", title: "Auto Responses", description: "Create and manage custom automated replies with ease." },
        { icon: "📿", title: "Islamic Features", description: "Daily Azkar reminders with flexible server configurations." },
        { icon: "⚡", title: "High Performance", description: "Lightning-fast response and high stability even for large servers." }
      ]
    },
    stats: {
      title: "Equinox in Numbers",
      subtitle: "High performance and stability at the highest level.",
      items: [
        { icon: "🤖", value: "50+", title: "Commands" },
        { icon: "⚡", value: "99.9%", title: "Uptime" },
        { icon: "🛡️", value: "24/7", title: "Protection" },
        { icon: "🌍", value: "1000+", title: "Servers" },
      ]
    },
    commands: {
      titlePrefix: "All Commands of",
      subtitle: "Over 40+ professional commands to manage your community.",
      categories: [
        {
          category: "Management",
          commands: [
            { name: "/addpartner", description: "Add a partner server." },
            { name: "/anti", description: "Configure anti-raid and protection settings." },
            { name: "/autorole", description: "Set up automatic roles for new members." },
            { name: "/ban", description: "Ban a member from the server." },
            { name: "/fix", description: "Fix channel permissions or bot states." },
            { name: "/hide", description: "Hide a text channel from members." },
            { name: "/kick", description: "Kick a member from the server." },
            { name: "/lock", description: "Lock the current channel." },
            { name: "/log", description: "Setup server logging systems." },
            { name: "/log_disable", description: "Disable specific server logs." },
            { name: "/log_preview", description: "Preview current log settings." },
            { name: "/refresh", description: "Refresh bot data or cache." },
            { name: "/role", description: "Manage member roles." },
            { name: "/set-lang", description: "Change bot language for the server." },
            { name: "/set_message-boost", description: "Configure boost announcement messages." },
            { name: "/unhide", description: "Unhide a text channel." },
            { name: "/unlock", description: "Unlock the current channel." }
          ]
        },
        {
          category: "General",
          commands: [
            { name: "/avatar", description: "Display user avatar." },
            { name: "/banner", description: "Display user or server banner." },
            { name: "/help", description: "Show bot help menu." },
            { name: "/ping", description: "Check bot latency." },
            { name: "/points", description: "Check user points or stats." },
            { name: "/profile-theme", description: "Customize profile theme." },
            { name: "/server", description: "Display server information." },
            { name: "/uptime", description: "Check bot uptime duration." },
            { name: "/user", description: "Display user information." }
          ]
        },
        {
          category: "Replies",
          commands: [
            { name: "/delete-reply", description: "Delete a custom auto-reply." },
            { name: "/list-reply", description: "List all server custom replies." },
            { name: "/auto-reply", description: "Create a new auto-reply trigger." }
          ]
        },
        {
          category: "Bank",
          commands: [
            { name: "/credits-list", description: "View credits leaderboard." },
            { name: "/credits", description: "Check your credit balance." },
            { name: "/daily", description: "Claim your daily reward." },
            { name: "/pay", description: "Transfer credits to another user." }
          ]
        },
        {
          category: "Games",
          commands: [
            { name: "/capitals", description: "Play capitals guessing game." },
            { name: "/cut", description: "Play cutting words game." },
            { name: "/fkk", description: "Play fast sentence games." },
            { name: "/letter", description: "Play letter game." },
            { name: "/math", description: "Play math challenge game." },
            { name: "/plural", description: "Play plural words game." },
            { name: "/single", description: "Play singular words game." },
            { name: "/translate", description: "Play translation challenge." },
            { name: "/type", description: "Play typing speed game." }
          ]
        },
        {
          category: "Azkar",
          commands: [
            { name: "/4kr", description: "Send Azkar instantly." },
            { name: "/تحديد_روم_اذكار", description: "Set the Azkar channel." },
            { name: "/تحديد_الايمبيد", description: "Configure Azkar embed design." },
            { name: "/تشغيل_الاذكار", description: "Enable automatic Azkar reminders." }
          ]
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "Is the bot free?", a: "Yes, most features are free." },
        { q: "Is there a dashboard?", a: "Yes, it will be launched soon." },
        { q: "Does it support Arabic?", a: "It supports both Arabic and English." },
        { q: "is there premium soon?", a: "yes it does Coming soon..." }
      ]
    }
  },
  ar: {
    nav: {
      features: "المميزات",
      commands: "الأوامر",
      statistics: "الإحصائيات",
      faq: "الأسئلة الشائعة",
      premium: "بريميوم", // <-- أضف هذه
      addBot: "أضف البوت",
    },
    hero: {
      badge: "✨ البوت الأقوى لإدارة السيرفرات الديسكورد",
      title1: "ابنِ مجتمع",
      title2: "ديسكورد الخاص بك",
      title3: "مع إيكوينوكس",
      description: "حماية قوية، اقتصاد، ألعاب، ردود تلقائية، مميزات إسلامية، لوحات تحكم وأكثر بكثير في بوت واحد.",
      addToDiscord: "أضف إلى ديسكورد",
      viewCommands: "عرض الأوامر",
    },
    features: {
      title: "لماذا Equinox؟",
      subtitle: "كل الأدوات التي تحتاجها لإدارة مجتمعك في مكان واحد.",
      items: [
        { icon: "🛡️", title: "حماية متقدمة", description: "أنظمة حماية قوية ضد السبام والهجمات مع أدوات إدارة متكاملة." },
        { icon: "💰", title: "اقتصاد متكامل", description: "نظام عملات، تحويلات، مكافآت يومية ولوحة للأغنى." },
        { icon: "🎮", title: "ألعاب تفاعلية", description: "مجموعة ألعاب تزيد تفاعل أعضاء السيرفر وتجعل المجتمع أكثر نشاطًا." },
        { icon: "💬", title: "ردود تلقائية", description: "إنشاء وإدارة ردود تلقائية بسهولة تامة." },
        { icon: "📿", title: "الأذكار", description: "إرسال الأذكار اليومية مع إعدادات مرنة لكل سيرفر." },
        { icon: "⚡", title: "أداء سريع", description: "استجابة سريعة واستقرار عالي حتى مع السيرفرات الكبيرة." }
      ]
    },
    stats: {
      title: "Equinox بالأرقام",
      subtitle: "أداء واستقرار على أعلى مستوى.",
      items: [
        { icon: "🤖", value: "50+", title: "الأوامر" },
        { icon: "⚡", value: "99.9%", title: "وقت التشغيل" },
        { icon: "🛡️", value: "24/7", title: "الحماية" },
        { icon: "🌍", value: "1000+", title: "السيرفرات" },
      ]
    },
    commands: {
      titlePrefix: "جميع أوامر",
      subtitle: "أكثر من 40 أمر احترافي لإدارة مجتمعك.",
      categories: [
        {
          category: "الإدارة",
          commands: [
            { name: "/addpartner", description: "إضافة شريك جديد للسيرفر." },
            { name: "/anti", description: "إعدادات الحماية المتقدمة ضد الهجمات." },
            { name: "/autorole", description: "تعيين الرتب التلقائية للأعضاء الجدد." },
            { name: "/ban", description: "حظر عضو من السيرفر نهائياً." },
            { name: "/fix", description: "إصلاح صلاحيات الرومات أو إعدادات البوت." },
            { name: "/hide", description: "إخفاء الروم الحالي عن الأعضاء." },
            { name: "/kick", description: "طرد عضو من السيرفر." },
            { name: "/lock", description: "قفل الروم لمنع الكتابة." },
            { name: "/log", description: "إعداد رومات سجلات المراقبة." },
            { name: "/log_disable", description: "تعطيل سجلات معينة." },
            { name: "/log_preview", description: "معاينة إعدادات السجلات الحالية." },
            { name: "/refresh", description: "تحديث بيانات أو ذاكرة البوت المؤقتة." },
            { name: "/role", description: "إدارة رتب الأعضاء (إضافة/إزالة)." },
            { name: "/set-lang", description: "تغيير لغة البوت في السيرفر." },
            { name: "/set_message-boost", description: "تخصيص رسائل إعلان البوستات." },
            { name: "/unhide", description: "إظهار الروم المخفي." },
            { name: "/unlock", description: "فتح الروم المقفل." }
          ]
        },
        {
          category: "العامة",
          commands: [
            { name: "/avatar", description: "عرض الصورة الشخصية للمستخدم." },
            { name: "/banner", description: "عرض بانر المستخدم أو السيرفر." },
            { name: "/help", description: "عرض قائمة المساعدة والتعليمات." },
            { name: "/ping", description: "فحص سرعة استجابة البوت." },
            { name: "/points", description: "التحقق من نقاطك أو تفاعلك." },
            { name: "/profile-theme", description: "تخصيص ثيم الملف الشخصي." },
            { name: "/server", description: "عرض معلومات وإحصائيات السيرفر." },
            { name: "/uptime", description: "معرفة مدة تشغيل البوت المستمر." },
            { name: "/user", description: "عرض معلومات وملف المستخدم." }
          ]
        },
        {
          category: "الردود",
          commands: [
            { name: "/delete-reply", description: "حذف رد تلقائي مخصص." },
            { name: "/list-reply", description: "عرض قائمة جميع الردود التلقائية." },
            { name: "/auto-reply", description: "إضافة رد تلقائي جديد." }
          ]
        },
        {
          category: "البنك",
          commands: [
            { name: "/credits-list", description: "عرض قائمة أغنى الأعضاء بالكريدت." },
            { name: "/credits", description: "التحقق من رصيدك الحالي من الكريدت." },
            { name: "/daily", description: "استلام الراتب أو المكافأة اليومية." },
            { name: "/pay", description: "تحويل كريدت لمستخدم آخر." }
          ]
        },
        {
          category: "الألعاب",
          commands: [
            { name: "/capitals", description: "لعبة عواصم الدول التفاعلية." },
            { name: "/cut", description: "لعبة تقطيع الكلمات والحروف." },
            { name: "/fkk", description: "لعبة فك وتركيب الجمل." },
            { name: "/letter", description: "لعبة الحروف السريعة." },
            { name: "/math", description: "لعبة التحدي الرياضي والمسائل." },
            { name: "/plural", description: "لعبة معرفة جمع الكلمات." },
            { name: "/single", description: "لعبة استخراج المفرد." },
            { name: "/translate", description: "لعبة تحدي الترجمة." },
            { name: "/type", description: "لعبة سرعة الكتابة في الشات." }
          ]
        },
        {
          category: "الأذكار",
          commands: [
            { name: "/4kr", description: "إرسال الأذكار فورا في الشات." },
            { name: "/تحديد_روم_اذكار", description: "تحديد الروم المخصص لإرسال الأذكار." },
            { name: "/تحديد_الايمبيد", description: "تخصيص شكل تصميم رسالة الأذكار." },
            { name: "/تشغيل_الاذكار", description: "تفعيل نظام إرسال الأذكار التلقائي." }
          ]
        }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "هل البوت مجاني؟", a: "نعم، معظم المميزات مجانية." },
        { q: "هل يوجد لوحة تحكم؟", a: "نعم، سيتم إطلاقها قريبًا." },
        { q: "هل يدعم اللغة العربية؟", a: "يدعم العربية والإنجليزية." },
        { q: "هل فيه نسخه بريميوم قريبا؟", a: "نعم قريبا.." }
      ]
    }
  }
};