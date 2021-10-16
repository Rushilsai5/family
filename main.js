var images = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fpnghut.com%2Fpng%2Fu60rvNupvT%2Ftom-mcgrath-the-boss-baby-francis-dreamworks-animation-father-cartoon-transparent-png&psig=AOvVaw12XmlpnBcicYugFLAkTqs4&ust=1634463563612000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjkrM_RzvMCFQAAAAAdAAAAABAD", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fimgbin.com%2Fpng%2FbkB2utkZ%2Fpygmy-seahorse-mother-png&psig=AOvVaw2mOVEkiBwIYAg4PtrOzp_C&ust=1634463675922000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJj2h-nRzvMCFQAAAAAdAAAAABAJ" , "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dcartoon&psig=AOvVaw32-RGdA7_s54GsvuNL9hcm&ust=1634463746432000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCEuorSzvMCFQAAAAAdAAAAABAJ"];
var names = ["Fmaily Book","Krishna", "Vijayasri", "Rushilsai", ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
