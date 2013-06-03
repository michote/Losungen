//~ enyo.setLogLevel(0); // The default log level is 99. enyo.log/this.log will output if the level is 20 or above, enyo.warn at 10, and enyo.error at 0.

enyo.kind({
  name: "Losungen",
  kind: "FittableRows",
  fit: true,
  classes: "losungen-background",
  today: undefined,
  year: undefined,
  shift: 0,
  uebers: "GNB",
  color: "blue",
  components:[
    {name: "getXML", kind: "enyo.WebService", handleAs: "xml", onResponse: "gotXML", onError: "gotError"},
    {kind: "Panels", name: "mainPanels", style: "width: 100%;", arrangerKind: "CollapsingArranger", draggable: false, fit: true, components: [
      {name: "main", kind: "FittableRows", style: "width: 100%;", fit: true, components: [
        {name: "settings", kind: "onyx.Drawer", open: false, classes: "settings", components: [
          {kind: "FittableColumns", fit: true, style: "margin: 0 0 .5rem; text-align: center;", components: [
            {kind: "FittableRows", classes: "icon-div", style: "float: left;", ontap: "infoTapped", components: [
              {kind: "onyx.Icon", src: "assets/info.png", classes:"icon"},
              {content: "Info", classes: "icon-text"}
            ]},
            {kind: "FittableRows", classes: "icon-div", ontap: "calTapped", components: [
              {kind: "onyx.Icon", src: "assets/cal.png", classes:"icon"},
              {content: "Gehe zu", classes: "icon-text"}
            ]},
            {kind: "FittableRows", classes: "icon-div", style: "float: right;", ontap: "settingsTapped", components: [
              {kind: "onyx.Icon", src: "assets/settings.png", classes:"icon"},
              {content: "Einstellungen", classes: "icon-text"}
            ]}
          ]}
        ]},
        {classes: "drag-field", ondragover: "vDragFinish"},
        {kind: "onyx.Icon", src: "assets/ecke.png", classes:"icon", style: "position: absolute", ontap: "openMenu"},
        {name: "header", classes: "losungen-header"},
        {name: "sonntag", classes: "losungen-sonntag"},
        {classes: "divider"},
        {kind: "enyo.Scroller", fit: true, components: [
          {classes: "losungen-content", ondragfinish: "dragFinish", ontap: "closeAll", components: [
            {name: "monatsSpruch", kind: "FittableRows", showing: false, components: [
              {content: "Monatsspruch", classes: "losung-caption"},
              {name: "mSpruch", classes: "losung-text", allowHtml: true},
              {name: "mVers", classes: "losung-stelle", allowHtml: true}
            ]},
            {name: "wochenSpruch", kind: "FittableRows", showing: false, components: [
              {content: "Spruch", classes: "losung-caption", allowHtml: true},
              {name: "wSpruch", classes: "losung-text", allowHtml: true},
              {name: "wVers", classes: "losung-stelle", allowHtml: true}
            ]},
            {content: "Losungstext", classes: "losung-caption"},
              {name: "losText", classes: "losung-text", allowHtml: true},
              {name: "losStelle", classes: "losung-stelle", allowHtml: true},
            {content: "Lehrtext", classes: "losung-caption"},
              {name: "lehrText", classes: "losung-text", allowHtml: true},
              {name: "lehrStelle", classes: "losung-stelle", allowHtml: true},
            {classes: "divider"},
            {name: "predigt", kind: "FittableColumns", style: "margin: .125rem;", components: [
              {content: "Predigt: ", classes: " losungen-meta"},
              {name: "predigtText", fit: true, allowHtml: true}
            ]},
            {name: "tagesText", kind: "FittableColumns", style: "margin: .125rem;", components: [
              {content: "Tagestext: ", classes: " losungen-meta"},
              {name: "tagesTextText", fit: true, allowHtml: true}
            ]},
            {name: "fortlaufenderText", kind: "FittableColumns", style: "margin: .125rem;", components: [
              {content: "fortl. Text: ", classes: " losungen-meta"},
              {name: "fortlaufenderTextText", fit: true, allowHtml: true}
            ]},
            {name: "psalm", kind: "FittableColumns", style: "margin: .125rem;", components: [
              {content: "Psalm: ", classes: " losungen-meta"},
              {name: "psalmText", fit: true, allowHtml: true}
            ]},
            {name: "lied", kind: "FittableColumns", style: "margin: .125rem;", components: [
              {content: "Lied: ", classes: " losungen-meta"},
              {name: "liedText", fit: true, allowHtml: true}
            ]},
            {name: "farbe", kind: "FittableColumns", style: "margin: .125rem;", components: [
              {content: "Farbe: ", classes: " losungen-meta"},
              {name: "farbeText", fit: true, allowHtml: true}
            ]},
            {classes: "divider"},
            {name: "info", allowHtml: true, content: "&copy; <a href='http://www.ebu.de'>Evangelische Br&uuml;der-Unit&auml;t</a> - Herrnhuter&nbsp;Br&uuml;dergemeine.<br>Mehr Informationen gibt es <a href='http://www.losungen.de'>hier</a>.", classes: "losung-info"}
          ]},
        ]},
        {name: "date", kind: "onyx.Drawer", open: false, classes: "settings", components: [
          {kind: "FittableRows", fit: true, style: "margin: 1rem; text-align: center;", components: [
            {name: "dateButton", kind: "onyx.Button", key: 0, classes: "date-button", content: "gehe zum heutigen Datum", ontap: "goToToday"},
            {name:"datePicker", kind:"onyx.DatePicker", minYear:2012, maxYear:2013, maxHeight: 400, onSelect: "saveDate"}
          ]}
        ]},
        {name: "about", kind: "onyx.Drawer", open: false, classes: "settings", components: [
          {kind: "FittableRows", fit: true, style: "margin:.5rem; text-align: center;", components: [
            {content: '<span style="color: #8bba3d; font-weight: bold;">'+Helper.app+' &ndash; v. '+Helper.vers +'</span><br>'
              + '&copy; 2013: <a href="mailto:reischuck.micha@googlemail.com">Micha Reischuck</a>, '
              + 'unter <a href="http://de.m.wikipedia.org/wiki/MIT-Lizenz#Lizenztext">MIT</a><br>'
              + 'basiert auf der webOS-app von <a href="http://zefanjas.de/">zefanjas.de</a><br>'
              + "&copy; Inhalt: <a href='http://www.ebu.de'>Evangelische Br&uuml;der-Unit&auml;t</a> - Herrnhuter&nbsp;Br&uuml;dergemeine.<br>"
              + "&copy; verlinkte Texte: bitte Copyright auf bibleserver.com beachten."
              , allowHtml: true}
          ]}
        ]},
        {name: "settingsMenu", kind: "onyx.Drawer", open: false, classes: "settings", components: [
          {kind: "FittableRows", fit: true, style: "margin: 1rem; text-align: right;", components: [
            {classes: "onyx-toolbar-inline", style: "margin-bottom: 1rem;", components: [
              {content: "Bibelübersetzung (für links)"},
              {kind: "onyx.PickerDecorator", components: [
                {},
                {name: "uebersPicker", kind: "onyx.Picker", onSelect: "saveUebers", floating: true, components: [
                  {content: "GNB", name: "GNB", active: true},
                  {content: "LUT", name: "LUT"},
                  {content: "HFA", name: "HFA"},
                  {content: "ELB", name: "ELB"},
                  {content: "NLB", name: "NLB"},
                  {content: "EU", name: "EU"},
                  {content: "SLT", name: "SLT"}
                ]}
              ]}
            ]},
            {classes: "onyx-toolbar-inline", style: "margin-bottom: 1rem;", components: [
              {content: "Farbe"},
              {kind: "onyx.PickerDecorator", onSelect: "saveColor", floating: true, components: [
                {},
                {name: "colorPicker", kind: "onyx.Picker", components: [
                  {content: "Blau", name: "blue", hex: "#053c66", active: true},
                  {content: "Grün", name: "green", hex: "#006611"},
                  {content: "Rot", name: "red", hex: "#9E0508"}
                ]}
              ]}

            ]},
            {classes: "onyx-toolbar-inline", components: [
              {content: "Zeige Hilfe beim Start"},
              {kind: "onyx.ToggleButton", name: "showHelp", value: true, onChange: "toggleHelp", onContent: "I", offContent: "0" }
            ]}
          ]}
        ]}
      ]},
      {name: "help", kind: "FittableRows", style: "width: 100%;", fit: true, components: [
        {kind: "enyo.Scroller", fit: true, components: [
          {kind:"Image", src:"assets/hilfe.png", style: "width: 20.089rem; height: auto; background-size: cover;", ondragover: "vDragFinish"}
        ]},
        {kind: "FittableColumns", classes: "onyx-toolbar-inline", style: "padding: 1rem; background-color: black;", components: [
          {kind: "onyx.ToggleButton", name: "showHelpStart", value: true, onChange: "toggleHelp", onContent: "I", offContent: "0" },
          {content: "Zeige Hilfe<br>beim Start", style: "margin-left: 1rem;", allowHtml: true},
          {fit: true, style: "text-align: right;", components: [
            {kind: "onyx.Button", content: "Schliessen", ontap: "closeHelp"}
          ]}
        ]}
      ]}
    ]}
  ],

  create: function () {
    this.inherited(arguments);
    enyo.asyncMethod(this, "getSettings");
    enyo.asyncMethod(this, "getToday");
  },

  getSettings: function () {
    this.color = Helper.getItem('color') ? Helper.getItem('color') : this.color;
    this.$.main.applyStyle("background-color", this.$[this.color].hex);
    this.$.help.applyStyle("background-color", this.$[this.color].hex);
    this.uebers = Helper.getItem('uebers') ? Helper.getItem('uebers') : this.uebers;
    var help = !Helper.getItem('helpoff');
    if (help) {
      this.$.mainPanels.setIndex(1);
      this.$.showHelpStart.setValue(help);
    }
    this.$.showHelp.setValue(help);
  },

  getToday: function() {
    var date = new Date();
    this.today = date.getDOY();
    this.year = date.getFullYear();
    this.shift = 0;
    this.showData();
  },

  getKey: function() {
    return this.year + '_' + (this.today + this.shift);
  },

  // ### import data from xml ###
  importXML: function(year) {
    var url = "assets/xml/" + year + ".xml";
    this.$.getXML.setUrl(url);
    this.$.getXML.send();
  },

  gotError: function (inSender, inResponse) {
    this.log("Can't read this");
  },

  gotXML: function (inSender, inEvent) {
    var xml = inEvent.data.getElementsByTagName("Losungen");
    for (var i=0; i<xml.length; i++) {
      Helper.setItem(this.year+'_'+(i+1), {
        datum: xml[i].getElementsByTagName("Datum")[0].firstChild.nodeValue,
        losungsText: xml[i].getElementsByTagName("Losungstext")[0].firstChild.nodeValue,
        lehrText: xml[i].getElementsByTagName("Lehrtext")[0].firstChild.nodeValue,
        losungsVers: xml[i].getElementsByTagName("Losungsvers")[0].firstChild.nodeValue,
        lehrVers: xml[i].getElementsByTagName("Lehrtextvers")[0].firstChild.nodeValue,
        wTag: xml[i].getElementsByTagName("Wtag")[0].firstChild.nodeValue,
        sonntag: (xml[i].getElementsByTagName("Sonntag")[0].firstChild) ? xml[i].getElementsByTagName("Sonntag")[0].firstChild.nodeValue : "",
        tagesText: (xml[i].getElementsByTagName("Tagestext")[0].firstChild) ? xml[i].getElementsByTagName("Tagestext")[0].firstChild.nodeValue.replace(/\\n/, ' ') : "",
        fortlaufenderText: (xml[i].getElementsByTagName("Fortlaufendertext")[0].firstChild) ? xml[i].getElementsByTagName("Fortlaufendertext")[0].firstChild.nodeValue : "",
        spruch: (xml[i].getElementsByTagName("Spruch")[0].firstChild) ? xml[i].getElementsByTagName("Spruch")[0].firstChild.nodeValue : "",
        spruchVers: (xml[i].getElementsByTagName("Spruchvers")[0].firstChild) ? xml[i].getElementsByTagName("Spruchvers")[0].firstChild.nodeValue : "",
        lied: (xml[i].getElementsByTagName("Lied")[0].firstChild) ? xml[i].getElementsByTagName("Lied")[0].firstChild.nodeValue : "",
        predigt: (xml[i].getElementsByTagName("Predigt")[0].firstChild) ? xml[i].getElementsByTagName("Predigt")[0].firstChild.nodeValue : "",
        psalm: (xml[i].getElementsByTagName("Psalm")[0].firstChild) ? xml[i].getElementsByTagName("Psalm")[0].firstChild.nodeValue : "",
        farbe: (xml[i].getElementsByTagName("LiturgischeFarbe")[0].firstChild) ? xml[i].getElementsByTagName("LiturgischeFarbe")[0].firstChild.nodeValue : "",
        monatsSpruch: (xml[i].getElementsByTagName("Monatsspruch")[0].firstChild) ? xml[i].getElementsByTagName("Monatsspruch")[0].firstChild.nodeValue : "",
        monatsVers: (xml[i].getElementsByTagName("Monatsspruchvers")[0].firstChild) ? xml[i].getElementsByTagName("Monatsspruchvers")[0].firstChild.nodeValue : ""
      });
    }
    enyo.asyncMethod(this, "showData");
  },

  // ### show data ###
  showData: function() {
    if (Helper.getItem(this.getKey())) {
      var obj = Helper.getItem(this.getKey());
      var d = new Date(obj.datum);
      this.$.header.setContent(obj.wTag + ", " + ((d.getDate()<10) ? '0'+d.getDate() : d.getDate()) + "." + (((d.getMonth()+1)<10) ? '0'+(d.getMonth()+1) : (d.getMonth()+1)) + "." + d.getFullYear());
      this.$.sonntag.setContent((obj.sonntag !== "") ? obj.sonntag : "");
      this.$.losText.setContent(this.replaceBrakets(obj.losungsText));
      this.$.losStelle.setContent(this.formatUrl(obj.losungsVers));
      this.$.lehrText.setContent(this.replaceBrakets(obj.lehrText));
      this.$.lehrStelle.setContent(this.formatUrl(obj.lehrVers));
      if (obj.spruch !== "") {
          this.$.wSpruch.setContent(this.replaceBrakets(obj.spruch));
          this.$.wVers.setContent(this.formatUrl(obj.spruchVers));
          this.$.wochenSpruch.show();
      } else {
          this.$.wochenSpruch.hide();
      }
      if (obj.monatsSpruch !== "") {
          this.$.mSpruch.setContent(obj.monatsSpruch);
          this.$.mVers.setContent(this.formatUrl(obj.monatsVers));
          this.$.monatsSpruch.show();
      } else {
          this.$.monatsSpruch.hide();
      }
      this.formatMeta(obj, 'predigt');
      this.formatMeta(obj, 'tagesText');
      this.formatMeta(obj, 'fortlaufenderText');
      this.formatMeta(obj, 'psalm');
      this.formatMeta(obj, 'lied');
      this.formatMeta(obj, 'farbe');
      this.resized();
    } else {
      this.importXML(this.year);
    }
  },

  replaceBrakets: function(text) {
    return text.replace('\[','<i>').replace('\]','</i>');
  },

  formatUrl: function(stelle) {
    return '<a href="http://m.bibleserver.com/text/' + this.uebers + '/' + stelle + '" target="_blank">' + stelle + '</a>';
  },

  splitText: function(text) {
    if (text.indexOf('::') >= 0) {
      this.log("split: ",text);
      var s = text.split(' :: ');
      for (i in s) {
        s[i] = this.formatUrl(s[i]);
      }
      return s.join(' ::&nbsp;');
    } else {
      return this.formatUrl(text);
    }
  },

  formatMeta: function(obj, text) {
    this.log("format: ",text);
    if (obj[text] === "") {
      this.$[text].hide();
    } else {
      if (text === 'lied' || text === 'farbe') {
        this.$[text + "Text"].setContent(obj[text]);
      } else {
        this.$[text + "Text"].setContent(this.splitText(obj[text]));
      }
      this.$[text].show();
    }
  },

  // ### navigation ###
  closeHelp: function() {
    this.$.mainPanels.setIndex(0);
  },

  openMenu: function() {
    this.$.settings.setOpen(true);
  },

  vDragFinish: function(sender, event) {
    if (+event.dy > 30) {
      this.$.settings.setOpen(true);
    }
    if (+event.dy < -30) {
      this.$.settings.setOpen(false);
    }
  },

  dragFinish: function(sender, event) {
    if (+event.dx > 120) {
      this.shift -= 1;
      this.showData();
    }
    if (+event.dx < -120) {
      this.shift += 1;
      this.showData();
    }
  },

  closeAll: function() {
    this.log();
    this.$.settings.setOpen(false);
    this.$.date.setOpen(false);
    this.$.dateButton.setContent("gehe zum heutigen Datum");
    this.$.dateButton.key = 0;
    this.$.about.setOpen(false);
    this.$.settingsMenu.setOpen(false);
  },

  // ### About ###
  infoTapped: function() {
    this.closeAll();
    this.$.about.setOpen(true);
  },

  // ### Date ###
  calTapped: function() {
    this.closeAll();
    this.$.date.setOpen(true);
    this.$.dateButton.setContent("gehe zum heutigen Datum");
    this.$.dateButton.key = 0;
    this.$.settingsMenu.setOpen(false);
  },

  goToToday: function(inSender, inEvent) {
    this.$.date.setOpen(false);
    !inSender.key ? this.getToday() : this.goToDate();
  },

  saveDate: function(inSender, inEvent) {
    var date = new Date(inEvent.value)
    this.$.dateButton.setContent("gehe zum gewählten Datum");
    this.$.dateButton.key = 1;
    this.today = date.getDOY();
    this.year = date.getFullYear();
    this.shift = 0;
  },

  goToDate: function() {
    this.$.dateButton.setContent("gehe zum heutigen Datum");
    this.$.dateButton.key = 0;
    enyo.asyncMethod(this, "showData");
  },

  // ### Settings ###
  settingsTapped: function() {
    this.closeAll();
    this.$.colorPicker.setSelected(this.$[this.color]);
    this.$.uebersPicker.setSelected(this.$[this.uebers]);
    this.$.settingsMenu.setOpen(true);
  },

  saveUebers: function(inSender, inEvent) {
    this.log(inEvent.selected.content);
    this.uebers = inEvent.selected.content;
    Helper.setItem('uebers', this.uebers)
    enyo.asyncMethod(this, "showData");
  },

  saveColor: function(inSender, inEvent) {
    this.log(inEvent.selected.content, inEvent.selected.hex);
    this.color = inEvent.selected.name
    Helper.setItem('color', this.color);
    this.$.main.applyStyle("background-color", this.$[this.color].hex);
  },

  toggleHelp: function(inSender, inEvent) {
    this.log(inSender.name, !inSender.getValue());
    Helper.setItem('helpoff', !inSender.getValue());
    this.$[inSender.name === "showHelp" ? "showHelpStart" : "showHelp"].setValue(inSender.getValue());
  },

});


