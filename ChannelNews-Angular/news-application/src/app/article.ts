export class Article {


  public publishedAt: Date;
  constructor (
    public title: string,
    public description: string,
    public imageUrl: string,
    public votes?: number // if we have no votes it will be undefined, ? ensures that it is optional
  ) {
      this.votes = votes || 0 // this makes the votes defined - either votes or 0
      this.publishedAt = new Date() // this doesn't have to be in constructor as on the right sign of equal there is no variable
    };

  // define public method to be able to pass the current Date to article

  public upvote(): void { // void means that we're returning.. nothing :P 
    this.votes += 1;
  };
  
  public downvote(): void {
    this.votes -= 1;
  }
    
  
}