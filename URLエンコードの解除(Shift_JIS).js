var sc = new ActiveXObject("StrConv.StrConv");
document.selection.Text = sc.DecodeUrl(document.selection.Text, 932);
sc = "";
