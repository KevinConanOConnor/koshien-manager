using KoshienGameBackend.Models;
using KoshienGameBackend.Services;



public class PlayerBuilder
{
    private readonly MathGenerator _math;

    public PlayerBuilder(NameBank nameBank, MathGenerator math)
    {
        _nameBank = nameBank;
        _math = math;
    }


    //Creates First year and adds to database
    public Player CreateFirstYear()
    {
        int Year = 1;
        string FirstName = Namebank.RandomFirstName();
        string LastName = _nameBank.RandomLastName();
        //Average Height of a first year will be 167 with std. deviation of 7. Min height will be 150. (1 standard deviation is 174, 2 is 181, 3 is 188, 4 is 195)
        int HeightCm = _math.GenerateStat(167, 7, 150);
        //  Generate current ability sigma (N(0, 1), clamped between -2.0 and 3.0)
        double abilitySigma = Math.Clamp(_math.Normal(0), -2.0, 3.0);
        // Generate Potential Ability sigma, but weight it so that players with high current ability tend to have more potential
        double potentialSigmaBaseline = abilitySigma / 2;
        double potentialSigma = _math.Normal(potentialSigmaBaseline);
        //Genreate personality sigma, also be weighted so that high current ability players tend to have better personality gens
        double personalitySigmaBaseline = abilitySigma / 2;
        double personalitySigma = _math.Normal(personalitySigmaBaseline);


    }
}