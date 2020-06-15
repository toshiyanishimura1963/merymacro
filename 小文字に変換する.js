var sc = new ActiveXObject("StrConv.StrConv");
document.selection.Text = sc.LowerCase(document.selection.Text);
sc = "";
