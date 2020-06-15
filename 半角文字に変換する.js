var sc = new ActiveXObject("StrConv.StrConv");
document.selection.Text = sc.HalfWidth(document.selection.Text);
sc = "";
