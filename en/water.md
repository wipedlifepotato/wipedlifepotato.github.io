---
layout: fuckallshit
lang: en
title: Heat capacity (DRAFT, RAW TOPIC)
translated: true
---
# REASONING:

One day, while busy with my own affairs — that is, just burning time on all kinds of nonsense — I started thinking about heating.
Without thinking long, after the idea of heating with heated water, I asked myself about heating with oil.
As far as is known, a water bath gives a temperature no higher than 100°C (at normal pressure).
An oil bath, depending on what kind of oil it is, can be 200°C or more.

Discussing this with an AI, the AI said it would be different because of heat capacity. But that didn't seem logical.
We started discussing heat capacity and other things, and it still didn't explain it.

First, let's understand how I pictured it in my head and based on what I know.
The movement of molecules is heat — that is, the faster a molecule moves, the more heat there is. But it's also infrared radiation. What is infrared radiation? In the Bohr theory of the atom (and there are several), electrons move around orbitals. Roughly speaking, infrared radiation can also be the "Paschen series". But pulling it in here is like putting an owl on a globe. An electron jumps to the 3rd level; if to the second, it's blue radiation; if to the first, UV.
Okay, but without this, mechanically, molecules always move.
At the same time, water always tends to escape into gas. It is held only by hydrogen bonds. H-O(:)-H.
Where : is a lone pair, but hydrogen doesn't have one like that — yet it kind of binds between itself, pulls over, and the bond is conditionally real. But if so, why is dichloromethane a liquid and also tends to go into gas? Therefore I didn't build anything on hydrogen bonds alone. Fact: hydrogen bonds affect proteins. You can affect the structure of hair this way. Treatment with water, steam, or chemically changes the structure and how hair arranges itself.
Fine, if we discard hydrogen bonds and in general molecular stuff and deeper Paschen series.
A liquid is heated; infrared radiation creates some vibration at the molecular level and allows particles to move faster <b>(like Brownian motion, which should accelerate when heated, in theory. Need to personally check with oil too).</b>
For water, the hydrogen bond breaks during movement. By the way, in both superheated and supercooled liquids, activation begins on impact. That is, in the case of a supercooled liquid, a crystallization point appears; in the case of boiling, a boiling point. To have more boiling points, silica gel beads are used. For better crystallization, a small crystal is used and ultrasound constantly creates conditions for water crystallization.
To make water rise by 1 degree Celsius, you need to spend some amount of kilojoules.
At the same time, the heat capacities of some substances are close:
```
Solid sucrose: approximately 1.25–1.3 kJ/(kg·K).
Water: 4.18 kJ/(kg·K).
Vegetable oil: approximately 1.8–2.2 kJ/(kg·K).
```

Glucose is also ~1.25...
Fructose ~1.3 (differs from glucose first by stereochemistry and a ketone group instead of an aldehyde; while it seems to have a slightly higher heat capacity value, it performs worse in caramel fuels.)

Okay. I couldn't catch it again; apparently the AI was hallucinating then and produced nonsense with identical values.
Looking at it: to heat oil we need to spend less time and energy than on water.
Even more so for sucrose and also for fructose. As far as my experience lets me understand, sucrose has a pretty good crystal lattice and many hydrogen bonds, like water. That is, that's why it dissolves easily in water. Essentially, it's an oligomer of fructose and glucose by the acetal bond of sugars. I've already written how the latter differ.
As an example of a branched sugar:

```
[H]C(=O)
HCOH
HOCH
HCOH
HCOH
CH2OH
D-glucose. (the penultimate OH looks to the right, therefore D. For R/S you need to look by the Ingold Cahn-Ingold-Prelog priority rules)
```
Fructose also differs by atom position: it starts with a CH2OH group and below it C=O and then sugars again, also 6 carbons in size.
We can also make ALL of them look to the right; we can count by chiral centers. Programmatically with SMILES "O=CC(O)C(O)C(O)C(O)CO"
Insert into the program https://github.com/wipedlifepotato/RadoniumAPI (yes, the logic for closed bonds needs to be fixed)

4 chiral centers are counted, 2^4 = 16 possible combinations. Divide by 2, so 8 sugars just for glucose.
That is, where it will be turned left/right. I asked ChatGPT to write all these sugars (just their names and all their known heat capacities; it got stuck a bit on that)

```
Eight names:
1. Allose
2. Altrose
3. Glucose
4. Mannose
5. Gulose
6. Idose
7. Galactose
8. Talose
Each has a D- and L-form. So 16 molecules in total.
```
But then it mixed the answer into a mess for ketoses and aldoses...
```
2. Heat capacity of ketohexoses
Found an experimental 2019 publication: Heat capacity and standard thermodynamic functions of three ketohexoses.

Data for crystalline substances at 298.15 K:
Ketose	Cp, J/(mol·K)	Cp, kJ/(kg·K)
D-fructose	227.70	1.264
D-psicose	221.30	1.228
D-tagatose	228.00	1.266
D-sorbose	No confirmed value at 298 K	—

Conversion done with molar mass 180.156 g/mol.
PMC+1

For sorbose there are also experimental calorimetric studies in the range of roughly 10–330 K, but an exact value at 298.15 K was not found in the table.
J-STAGE

For L-forms: in the same crystalline state, enantiomers have the same heat capacity.

Thus, we have three experimental values out of four ketoses. I will not substitute calculated values for measured ones.
```

*https://www.sciencedirect.com/science/article/pii/S0021961418309844*

<hr/>

Okay, I think it just didn't check for L. If so, the structure still affects kJ/(kg*K) a little.
At the same time, it's worth considering that breaking a crystal bond and forming it also requires energy.
For example, cooling table salt in water or some ammonium salts will cause an endothermic (heat-absorbing) reaction. And also crystallization sometimes requires or even emits heat. Then, initially energy goes not into accumulating energy, but into internal processes like lattice destruction and sugar caramelization. That is, even here it's not clear how they counted, but obviously the values are approximate and not exact, because this needs to be taken into account.

Then there will also be a difference for distilled water and solutions.

UPD: I studied the article the AI gave. It pulled values out of thin air; the authors simply came to the conclusion that heat capacity differs for these sugars, although their structure is the same ignoring stereochemistry. The rest the AI MADE UP.

Then, let's return to our first reasoning. We should also know about torsional motion inside atoms — that is, an atom always rotates even within itself (chair/boat conformations, etc.).
That is, the molecule itself has some internal energy, and from physics we should also know that even between solid substances in theory some interaction occurs and they exchange electrons. Diffusion, yes.

Now, when we've thrown all this into one mush. We put sugar on the stove, the stove heats up. The glass heats up first by itself. It doesn't boil, doesn't melt, and at the same time, by the way, light passes through a hot glass very differently and even changes color slightly. That is, from the outside there is no movement in the glass at all. It is as it was. That is, some energy is primarily transferred between molecules. Then they no longer accumulate energy, but some lattice destruction occurs (with a phase tendency toward gas; there are 3 phases in metallurgy. Can be found). And then upon solidification it will even spend this energy back, most likely — that is, take back its own heat — and how then to take sugar for heat capacity at all, and sugars in general?

For gases, we know: when gas is compressed it heats up. There is a tendency for the gas to go back.
When expanding — it cools down. Release a gas cylinder into the air — gas cooling. That is, some pressure leaves. Let this also be here for reasoning.

It's also worth noting that boiling of many solvents I've encountered happens at significantly lower values. Namely, the tendency to evaporate very abundantly — that's already the starting point. Bubbles in my kettle start appearing even before it reaches 100°C. Somewhere around 60 it's already noticeable. Maybe my thermometer is broken.

That is, it's not entirely clear why, if by such logic the heat capacity and heat release of oil would be less, in practice thermal oils are used, and not water.
Why then is it not taken into account at all what transfers heat? For example, a metal mug will heat water faster on a stove — even water with the same volume in a pot is faster than through borosilicate glass. That is, in general, what do we represent as heat capacity?

As I started with movement, roughly speaking imagine it as inertia of molecular movement or some energy in that molecule until it settles down. That is, how much energy accumulates in total so that inside the atom this energy calms down, and what affects this in general.

That is, even if we account for the large energy spent on boiling, we don't account for the fact that alcohol also won't spend most of its energy on accumulation, but on volatilization. It won't store all of it, just as not all energy transfers into heat as such in general. Because most of the energy should and does go into light, movement, and other internal processes. The heating of the nearby surface and heat transfer into air is another thing.
For example, water in a glass cup will create a layer of vapor that won't let other particles evaporate faster. As an example, in a wider container evaporation happens faster, because that film is no longer there. Conversely, partially, this film turns back into water. That is, some energy is also created that does not let this heat pass into the air. In the case of fat we have a complex ester of glycerol and fatty acids, triglycerides. Most often, if it's sunflower oil, they are unsaturated and even not solid in pure form, but liquid fatty acids, which can even be saponified with baking soda. You can check by acid hydrolysis with orthophosphoric acid in excess of water to acid to sunflower oil. Better with diluted acid, but concentrated works in general too, though the yield will be small. Simply in diluted form the acidity is slightly higher and protonation of RC(=O)-O:-CR' bonds occurs.
That is, H+ goes by a donor-acceptor path (see also Lewis acids and bases, where an acid is an acceptor of a lone pair. In the case of H+, it accepts this pair from a donor, oxygen). Thereby it turns back into a carboxylic acid. To understand better, it's better to look where we see that we have an alcohol at the beginning, not an acid. CH2-O-CO-R'
and 3 of these in a row.
It hits the first O between CH2 and COR', at the lone pair.
For some time a carboxylic acid appears as an intermediate. A charge appears on CH2, strongly positive, because the molecule receives a larger charge, and if even a weak OH- ion is present, it hits the carbocation and the bond accordingly breaks. A carboxylic acid and an alcohol group appear. In the case of alkali, it hits directly at the carbonyl on the CO bond. It's also partially positive there, and this way complete hydrolysis is obtained. Because the alcohol is then protonated again and C(+)-OH2(-) charge appears again.
Also, by an Sn1 mechanism the following mechanism may go, for example for ethyl alcohol:
CH3CH2-OH +H+ => CH3CH2(+)-OH2 => HOH + CH3CH2(+) charge and, for example, a CN(-) ion can attach here and it will go by Sn1 mechanism (HCN/CN- specifically with the CN- ion is needed, and a protic solvent like water and a polar one in the case of CN-). CN- attaches. By Sn2 it will be just as I wrote above and there the partially positive carbonyl is hit immediately and the molecule leaves. Depends on mechanisms, I misspoke there. AI reminded me after all that there are 2 paths, and more precisely there are reverse Sn1, Sn2 and also elimination.
And now not about fats, acids, but about the fact that here we have an O bond and a partially positive charge, and instead of a hydrogen bond we come to the fact that here we have bonds between CO and O. But actually, what's more interesting is that unsaturated fatty acids are usually liquid. And saturated ones are usually solid. Unsaturated ones have trans/cis (E-trans essentially/Z-cis essentially). Under certain conditions, like stereoisomers, they mix into an equal mixture like racemates or like mutarotation with sugars (there the chain opens and closes again).
In general, to all this: you can't consider a physical phenomenon while forgetting about the properties of the substance that makes this phenomenon and their nature. We must look into all of this.
Let all these reasonings seem like mush and a pun, but this is an attempt to make some connection, my reflections, for my further conclusions after my experiments. I write and chew all this over, as I know and remember, only because right now there is degradation of knowledge and the internet in general. Even finding good literature can be quite a task, and you need to explain everything right away, as lawyers do in their agreements, so that further in the text it's clear what is being written about.

(There may be errors in the reasoning, including chemical ones. It will need to be checked and rechecked later, but in fact, in the question of heat capacity, Sn1/Sn2 mechanisms, fat hydrolysis theory and so on are not so important right now, because we're talking about a physical phenomenon. But we simply proceed from what sunflower oil is and how to be convinced of the nature of fat unsaturation. Although I'm sure there must be saturated fatty acids that will be liquid under normal conditions. And because of how; all this was not laid out and was written in a stream of thoughts. The rest that I could visually represent before sleep, unfortunately, I won't be able to sketch with the same accuracy)

<b>And if you look at the fact that animals use fat so they don't freeze, and that animal fat is used for this better than water — then it's not so much about spending energy to raise degrees, as about transferring heat from molecule to molecule and retaining it. Clearly 200°C will be higher than 100°C. If you believe the slop, then accordingly the heat capacity of animal fat is lower. But for some reason in nature a layer of sweat is not used for warming, but fat..</b>
<hr/>

## Note about Sn1/Sn2
For a more precise understanding of Sn1, Sn2. A very simple explanation:
Sn2 Bimolecular
Sn1 Unimolecular

Without complicated relativistic formulas.
(usually so and usually means that, practically always)
R-I primary and should always be Sn2
I-R-I secondary and can be Sn1/Sn2
RI3 - always Sn1

This is for halides.
R(+)OH2 In theory can be either unimolecular or bimolecular (needs to be checked in real conditions)
RI + Na RR this is not quite Sn2/Sn1
RI + R' usually goes by a radical mechanism (heat/UV/peroxide)(there can be exceptions, where our radical R' is saturated. Like an alkane)
Sn2  (aprotic)
Nu + R-I => Nu..R-I => NuR + I-
Sn1  (protic solvent)
Nu + R-I => R(+) + I-  + Nu (Nu - nucleophile, something that loves +, either a negatively charged particle or a Lewis base for example) => RNu + I-; Protic is needed here so that this I- doesn't go back, but attaches to a proton (H+)

### What is this for
To understand what I wrote about fat hydrolysis "and what hits where..". And how to verify it and why you don't necessarily have to use alkali and even table salt as recommended by unclear guides I found before I got interested in chemistry to get soap. At minimum you need fat, preferably not vegetable. Or hydrogenated. Simply vegetable fat usually has liquid fatty acids. And the acid itself can be obtained from already saponified soap in an acidic medium, and even easier. And fat — because that's where the unclear logic started. That, supposedly, for heating it's more profitable to use a liquid. Although, practically, thermal fluids are used in the real world. And moreover, in the animal world fat is used to warm the body.

### What I roughly came to
If you pour water into acid and get its hydration (already hydrated won't behave like that), we don't give this energy away — the molecule gives it off as an excess from its internal processes. That is, we spend energy on some process not fully understood at the molecular level; to shift heat by a degree. At the same time, the water didn't possess these kilojoules when poured — that is, it was 20°C for example and the acid too, but heat appeared.
<p>It may be difficult for a molecule to transfer heat to another molecule, thereby decreasing/increasing "heat capacity". The following reasoning should and will only be checked in practice.
<p>In plans to verify. If metal transfers heat better, electrons better and some field.
If so, water with increased mineralization should transfer heat and electricity better. Thereby this should either increase or decrease heat capacity. For now, it seems to me that when conductivity increases, heat capacity can both grow and fall. For example, heat capacity may decrease, because it will be easier to heat the liquid. And at the same time, heat will leave much faster than in the case of fat. (reread my thoughts)</p>

Question-reasoning: If fat has poor heat capacity compared to water, why is fat used in nature; but not sweat to preserve body heat, because water has more heat capacity? It would be more logical to cover the body with a layer of water in that case. Does fat give off less heat or store it worse in itself ("capacity")? It seems that the "capacity" reserve of degrees for fat is greater than for water. The rest is still additional reasoning.

<hr/>

<h2><p>Experiments:</p></h2>
<br/>

<pre>
1st experiment, water was already boiled, in a kettle. Cooled to room temperature and heated to 100°C at 0.5 liters.
Required time for kettle to turn off ~1:39 minutes.
Next repetitions 0.5 liters slightly warmed 1:26. Almost the same as last time 1:56.

Excess table salt, this is more interesting.
It BOILS much more strongly and the kettle turns off later. At the same time the time is also 1:39 m, but actually it boiled at a minute, if not a bit earlier, and the kettle heated up more, more than usual.
The water itself rose and filled the whole kettle. That is, abundant steam release began faster than without salt.
As a result, it seems salt accelerated heat transfer. And then, even if you pour water out of the kettle, the kettle is hot and water in a cup cools faster. Then it's also about the speed of heat transfer between objects and its retention.

There will be more experiments here.
For now, <b>it seems to me heat, like electricity, has a similar nature</b>
</pre>

<h2> About Joules </h2>
<pre>
> How did Joule discover water, did they slosh it around, if yes then explain the experiment
> You probably mean Joule's experiment with water heated by falling weights and rotating paddles. It helped prove that mechanical energy can turn into thermal...

Then the AI, no matter how I tried to find out from it why my stirrer doesn't heat without a stove and how many RPM are needed, produced slop after slop, so all we need for further is the essence of what a joule is.
The videos I looked for were usually 3D graphics where nothing needs to be proven. And another showed he transfers temperature with his finger... And of course very complex setups are needed... Well, or beer and water, kvass there. In general, didn't find it, but we'll take into account what a joule is.

Based on this and the fact that, according to the slop, a joule can't be directly converted to 1 Celsius, it's unclear where it comes from here and why.
</pre>

<h2> About Celsius </h2>
<pre>
Studying what Celsius is in Vert Dider popular science, they claim Celsius is the freezing and boiling points of water... That's enough to understand that it's about how mercury behaves in the device. When heated it rises, when freezing back to the bulb. In general, that's it. It's a transition in the volume of some substance that increases in area when heated. As do all bodies (except those that contract instead. For example bismuth, it expands when cooled; and other metals, for example, contract). Therefore, we won't rely here on a mathematically substituted Celsius function, but we will take into account what it is.
</pre>