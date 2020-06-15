var sc = new ActiveXObject("StrConv.StrConv");
document.selection.Text = sc.EncodeUrl(document.selection.Text, 932);
sc = "";
