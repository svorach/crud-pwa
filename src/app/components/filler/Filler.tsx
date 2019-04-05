import * as React from 'react';

export interface FillerProps {
  text?: string;
}

export class Filler extends React.PureComponent<FillerProps> {
  render() {
    if (this.props.text) {
      return <>{this.props.text}</>;
    }

    return (
      <div id="output">
        <h1>
          I meant 'physically'. Look, perhaps you could let me work for a little
          food? I could clean the floors or paint a fence, or service you
          sexually?
        </h1>
        <p>
          Bender?! You stole the atom. Yeah, lots of people did. You won't have
          time for sleeping, soldier, not with all the bed making you'll be
          doing. You, a bobsleder!? That I'd like to see!
        </p>
        <p>
          Hey, guess what you're accessories to. Ah, yes! John Quincy Adding
          Machine. He struck a chord with the voters when he pledged not to go
          on a killing spree. I am Singing Wind, Chief of the Martians.
          WINDMILLS DO NOT WORK THAT WAY! GOOD NIGHT!
        </p>
        <h2>
          Ok, we'll go deliver this crate like professionals, and then we'll go
          ride the bumper cars.
        </h2>
        <p>
          Ummm…to eBay? Perhaps, but perhaps your civilization is merely the
          sewer of an even greater society above you! Fry, you can't just sit
          here in the dark listening to classical music. All I want is to be a
          monkey of moderate intelligence who wears a suit… that's why I'm
          transferring to business school!
        </p>
        <ol>
          <li>
            I've got to find a way to escape the horrible ravages of youth.
            Suddenly, I'm going to the bathroom like clockwork, every three
            hours. And those jerks at Social Security stopped sending me checks.
            Now 'I'' have to pay ''them'!
          </li>
          <li>
            These old Doomsday Devices are dangerously unstable. I'll rest
            easier not knowing where they are.
          </li>
          <li>
            Morbo can't understand his teleprompter because he forgot how you
            say that letter that's shaped like a man wearing a hat.
          </li>
        </ol>
        <h3>
          I've got to find a way to escape the horrible ravages of youth.
          Suddenly, I'm going to the bathroom like clockwork, every three hours.
          And those jerks at Social Security stopped sending me checks. Now 'I''
          have to pay ''them'!
        </h3>
        <p>
          And until then, I can never die? No, she'll probably make me do it.
          No! The cat shelter's on to me. Large bet on myself in round one.
        </p>
        <ul>
          <li>
            For the last time, I don't like lilacs! Your 'first' wife was the
            one who liked lilacs!
          </li>
          <li>
            Calculon is gonna kill us and it's all everybody else's fault!
          </li>
          <li>Does anybody else feel jealous and aroused and worried?</li>
        </ul>
        <p>
          Hey, you add a one and two zeros to that or we walk! That's not soon
          enough! I don't 'need' to drink. I can quit anytime I want! Yes,
          except the Dave Matthews Band doesn't rock. We can't compete with Mom!
          Her company is big and evil! Ours is small and neutral!
        </p>
        <p>
          I'll get my kit! Please, Don-Bot… look into your hard drive, and open
          your mercy file! Tell them I hate them. Calculon is gonna kill us and
          it's all everybody else's fault!
        </p>
        <p>
          But, like most politicians, he promised more than he could deliver.
          Soothe us with sweet lies. All I want is to be a monkey of moderate
          intelligence who wears a suit… that's why I'm transferring to business
          school!
        </p>
        <p>
          A sexy mistake. We're rescuing ya. We're also Santa Claus! Maybe I
          love you so much I love you no matter who you are pretending to be.
          Does anybody else feel jealous and aroused and worried?
        </p>
        <p>
          Man, I'm sore all over. I feel like I just went ten rounds with mighty
          Thor. They're like sex, except I'm having them! Say what? Daddy
          Bender, we're hungry. No, she'll probably make me do it.
        </p>
        <p>
          I guess because my parents keep telling me to be more ladylike. As
          though! Come, Comrade Bender! We must take to the streets! I love this
          planet! I've got wealth, fame, and access to the depths of sleaze that
          those things bring.
        </p>
        <p>
          In our darkest hour, we can stand erect, with proud upthrust bosoms.
          And I'm his friend Jesus. Pansy. In your time, yes, but nowadays shut
          up! Besides, these are adult stemcells, harvested from perfectly
          healthy adults whom I killed for their stemcells.
        </p>
        <p>
          Aww, it's true. I've been hiding it for so long. What's with you kids?
          Every other day it's food, food, food. Alright, I'll get you some
          stupid food. I just want to talk. It has nothing to do with mating.
          Fry, that doesn't make sense.
        </p>
        <p>
          Leela, are you alright? You got wanged on the head. Hello, little man.
          I will destroy you! Why would I want to know that? I had more, but you
          go ahead. I love you, buddy!
        </p>
        <p>
          Spare me your space age technobabble, Attila the Hun! Well, thanks to
          the Internet, I'm now bored with sex. Is there a place on the web that
          panders to my lust for violence? As an interesting side note, as a
          head without a body, I envy the dead.
        </p>
        <p>
          Check it out, y'all. Everyone who was invited is here. Come, Comrade
          Bender! We must take to the streets! You don't know how to do any of
          those. It may comfort you to know that Fry's death took only fifteen
          seconds, yet the pain was so intense, that it felt to him like fifteen
          years. And it goes without saying, it caused him to empty his bowels.
        </p>
      </div>
    );
  }
}
