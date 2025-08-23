using System.ComponentModel.DataAnnotations.Schema;


//I'm actually going to rework this to work as a familiarity profile rather than a range. High familiarity at a position will provide bonuses to their range and fielding technique and arm accuracy when playing a position. As well as maybe their composure. While low familiarity will lower them.
public class FieldingProfile
{
    public int Id { get; set; }

    public int C { get; set; }
    public int _1B { get; set; }
    public int _2B { get; set; }
    public int _3B { get; set; }
    public int SS { get; set; }
    public int LF { get; set; }
    public int CF { get; set; }
    public int RF { get; set; }
    public int P { get; set; }

    // Not mapped to DB — used only in logic
    [NotMapped]
    public Dictionary<FieldingPosition, int> Familiarity
    {
        get => new()
        {
            { FieldingPosition._C, C },
            { FieldingPosition._1B, _1B },
            { FieldingPosition._2B, _2B },
            { FieldingPosition._3B, _3B },
            { FieldingPosition._SS, SS },
            { FieldingPosition._LF, LF },
            { FieldingPosition._CF, CF },
            { FieldingPosition._RF, RF },
            { FieldingPosition._P, P }
        };
        set
        {
            C = value.GetValueOrDefault(FieldingPosition._C);
            _1B = value.GetValueOrDefault(FieldingPosition._1B);
            _2B = value.GetValueOrDefault(FieldingPosition._2B);
            _3B = value.GetValueOrDefault(FieldingPosition._3B);
            SS = value.GetValueOrDefault(FieldingPosition._SS);
            LF = value.GetValueOrDefault(FieldingPosition._LF);
            CF = value.GetValueOrDefault(FieldingPosition._CF);
            RF = value.GetValueOrDefault(FieldingPosition._RF);
            P = value.GetValueOrDefault(FieldingPosition._P);
        }
    }
}
