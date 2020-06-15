var sc = new ActiveXObject("StrConv.StrConv");
document.selection.Text = sc.DecodeHtml(document.selection.Text);
sc = "";
