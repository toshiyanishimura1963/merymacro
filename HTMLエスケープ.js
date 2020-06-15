var sc = new ActiveXObject("StrConv.StrConv");
document.selection.Text = sc.EncodeHtml(document.selection.Text);
sc = "";
