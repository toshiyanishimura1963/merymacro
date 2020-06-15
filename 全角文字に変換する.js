var sc = new ActiveXObject("StrConv.StrConv");
document.selection.Text = sc.FullWidth(document.selection.Text);
sc = "";
