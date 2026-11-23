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
<h2> About a thermocouple / a bit about hole conductivity </h2>
<pre>
There is hole conductivity in semiconductors. Oxides of some metals, silicon. For example, when light falls on copper(I) oxide you can get electricity.
Hole, because current doesn't flow through them until you fill the "holes" with electrons/photons and so on.

A thermocouple, for example take a copper wire and an iron nail. Solder them and if you heat the middle there will be a direct current, small, but there will be. So can heat move electrons?

p.s. actually a certain electromagnetic field is created, in which some energy is transferred (but I didn't really dig into that).
The point of this part: heat can be converted into electricity, just like light. And light is also a kind of wave, radiation. Infrared radiation is also a wave (even Lenin is a wave and a mushroom, joke).
</pre>

<h2> That stuff </h2>
<pre>
It seems that heat capacity, like Celsius and Joule, are simplified models. Like billiard balls for gases. Same as the idea of emptiness in atoms. Just because the particles are simple, BUT the proton is also made of simpler particles and so on, and overall we haven't really seen the atom, only its field. Yes, some people have heard theories that you can build something out of atoms and rearrange them. Well, yes, you can insert them into a crystal lattice. You can even take a grain of sugar and throw it across the floor. Atoms move, yes. Only here's the thing: the atom itself has at least 4 models and nobody knows the exact one to the end. Bohr, Rutherford, wave... That is, before this we had a simplified model before the atom, we started digging deeper and the deeper the more questions. The less they can explain some things, the more they go into complex explanations and all sorts of "emptiness in the atom". Well, there is no emptiness there, fields are constantly overlapping each other.
That is, heat capacity is like taking electric current to be water and explaining everything with water. Everything works and is convenient, yes. In chemistry there were radical models before Butlerov and Kekulé and there too everything worked. Only, later it suddenly turned out that we were "putting an owl on the globe". These are all models that can and should be revised. Overall, that's why I don't get into physics and haven't; usually quantum physics is unclear, what with the formulas. That is, they try to stretch the formula h=mc^2 or whatever it is onto everything... They try to stretch wavelength onto everything. Even judging a car's speed by its color. Simpler to see how much faster a laser returns in time, reflects back...
Therefore, I believe we need to look not for complicated models, but simple ones. Not just rote memorization of formulas as such, but a search for mechanisms. Someone told me that in chemistry you only have to memorize and there are no patterns. Nonsense, they follow from each other in a row. You need a foundation and this foundation is lost from generation to generation. People start cramming everything for exams, for work, and they distort the original sources over and over. It's like the Mandela effect, when it's just a mistake in a textbook and everyone believes it. And so on through generations. Models should be visualized in the head, simulated. Or on paper, and each model should complement the previous one, not have mechanics and then, sorry, it doesn't work at the quantum level.
At the same time, I generally have no right to fully get into physics, simply because I don't have enough knowledge and all my reasoning before and after came at most from knowledge I got from chemistry materials. Some authors like to shove physics into chemistry where it shouldn't be at all. So I did get in a little. But I can't analyze it deeply further. So I call in the AI-slop assistant with the following prompt: "You are a laureate, doctor of science in quantum physics with chemistry and also ordinary practical physics. Explain my model, how much I'm 'discovering America'. How true or untrue the model is and why I might be right or I am not right"
</pre>

<h2>AI-Slop Reasoning (GPT)</h2>
<pre>
<details>
<summary>
Slop 1
</summary>
Overview of the author's hypotheses about heat capacity

Below is a breakdown of all the author's key hypotheses about the heat capacity of water and other media. For each hypothesis it is indicated whether known scientific analogues exist, which terms/theories correspond to it, what is known now (references to literature), and also – where the originality or the illegitimacy of the formulation lies. Each hypothesis is separated: first we conditionally state what the author apparently meant (formulations from him), then – the analysis with scientific sources.
1. Heat capacity as a response to internal molecular processes

Author's formulation (reproduced): the heat capacity of a substance depends on the internal processes of molecules and the redistribution of energy between them. When heated, molecules acquire internal energy (rotation, vibration, etc.), and this is what predetermines the high heat capacity of water.

Scientific analogue: in thermodynamics heat capacity is linked to the number of accessible degrees of freedom (the equipartition theorem, Debye/Einstein models for solids, etc.). For molecules, thermal energy goes into translational, rotational and vibrational motion. At low temperatures vibrational modes are "frozen". For water, as a polyatomic molecule with strong hydrogen bonds, these effects are especially noticeable.

What is known: classical physics explains heat capacity through the contributions of different degrees of freedom: for example, an ideal monatomic gas has $C_V=3/2R$, a diatomic one – more (rotation is included), solids – about $3R$ at ordinary T according to Dulong–Petit and decrease to 0 at $T\to0$ (Debye model). Liquid water has additional anomalies: its heat capacity ($C_p\approx4{,}18\ \mathrm{kJ/kg\cdot K}$) is substantially larger than that of many other liquids. Molecular-dynamics studies confirm that this is related to the excitation of vibrational modes and fluctuations of the hydrogen network. Thus, in models of pure water, a classical simulation without quantum effects (where all vibrations are excited) gives an overestimated $C_p$, while including quantum effects (suppressing high-frequency modes) brings the calculation down to experiment.

Confirmations and experiments: it is well studied that the heat capacity of water is anomalously large at ordinary temperature and has a maximum in the supercooled region (≈230 K). Modern calculations link this to fluctuations in the hydrogen network. Thus the idea of the influence of internal molecular degrees of freedom on $C_p$ is a known fact.

Difference in the author's formulation: the idea itself is not new. What could be erroneous would be mixing this concept with other effects (for example, "energy transfer from outside (IR)" – see below). The author's formulation seems to coincide with the basics of statistical thermodynamics (equipartition). If something else was meant (for example, counting additional conformational energy beyond the standard model), that needs clarification. Be that as it may, the very dependence of $C_p$ on internal molecular processes is already known and described in the physics of liquids.

Status: A known, well-described model. The author's formulation is justified, but in itself is not new.
2. The influence of intermolecular interactions (hydrogen bonds, conformations) on heat capacity

Author's hypothesis: changes in the hydrogen network, molecular configurations and weak interactions affect heat capacity (e.g., water supposedly "easily changes structure" when heated, giving an additional contribution to $C_p$).

Analogue and theory: the intense network of hydrogen bonds in water is a key factor of its anomalies. The term "analogue" here can be served by the theory of water anomalies, where structural rearrangements (intermolecular bonds) contribute to heat capacity. At the dawn of the 20th century it was already recognized that the "potential energy of interaction between molecules" contributes to the heat capacity of a liquid. Modern studies of water anomalies link high $C_p$ to fluctuations of local density (low-density and high-density structures) and H-bonds.

What is known: The work of Chan et al. (2026) shows that the excess heat capacity of water is explained by the transformation of local LDL↔HDL structures, associated with H-bond rearrangement. This agrees with theoretical models of liquid water. Thus the influence of intermolecular forces on heat capacity is a known fact. Other liquids without hydrogen bonds have much lower $C_p$ (the example in [45] compares with methanol, ethanol, etc., see pp. 44–53).

Experiments: There are data on the heat capacity of solutions and various phases of water confirming the role of H-bonds. For example, when salt is added (disrupting the H-network), the $C_p$ of water decreases. For hydrogen isotopes (D₂O) the heat capacity differs from H₂O (it is known that D₂O has slightly higher $C_p$ due to stronger bonds). Molecular conformations (OH angle, positions of H atoms) affect bond energy, which is reflected in heat capacity (see [19] below on sucrose).

Difference in formulation: The author's ideas about conformational changes and associated energies partly coincide with what the literature calls the structural contribution to heat capacity (the microscopic explanation of the anomaly). If the author assumes some new effects (for example, real-time dynamic changes of configurations), no justification has been found yet. Overall this hypothesis is partially known: the contribution of molecular interactions to the heat capacity of a liquid is an accepted concept.

Status: Partially known, described in the literature. Something similar has been considered (the structural component of $C_p$), but if the author sees a specific "new" mechanics, it needs to be formalized more clearly and checked.
3. Heat transfer and heat capacity: distinguishing the ability to conduct/retain heat from heat capacity

Author's idea: heat capacity (the capacity to absorb heat) must be distinguished from thermal conductivity or the ability of a substance to retain heat; perhaps the author confuses these concepts. He seems to think that errors in $C_p$ measurements are related to the heat-transfer or heat-retention characteristics of the sample.

Scientific analogue: Physics distinguishes heat capacity (capacity to absorb heat, $Q=mC_p\Delta T$) from thermal conductivity (the rate of heat transfer through a body). There is also the concept of thermal resistance (ability to retain heat). These quantities are related but not the same. Heat transfer is described by Fourier's equation; it does not include $C_p$, but includes $\lambda$ (thermal conductivity) and density. Engineering introduces thermal diffusivity $\alpha=\lambda/(\rho C_p)$, which combines both. But from the Wiedemann–Franz law it is clear that a link between $C_p$ and $\lambda$ exists only for electron-conducting metals (the pulse part).

What is known: In a pure metal, thermal and electrical conductivity are related by the Wiedemann–Franz law: $\kappa/\sigma \propto T$. In non-conducting liquids (such as water), heat carriers are not electrons, so there is no strong link between $\lambda$ and $C_p$. A classic example: ice (solid; dense crystal) has $\lambda\approx2{,}18\ \mathrm{W/mK}$, while liquid water has only $0{,}56\ \mathrm{W/mK}$ at $0^\circ$C, with comparable $C_p$ (≈2–4 kJ/kgK). This shows that the ability to conduct heat and the ability to absorb it can differ greatly. Thus, confusing heat capacity with thermal conductivity is incorrect. However, their combination matters in transient processes. For example, fast-heating problems look at the thermal penetration coefficient $\alpha$.

Experiments: There are specifically few direct experiments on the "link between $C_p$ and $\lambda$", since these quantities are measured by different methods. From [9†] it can be seen that the solubility of a substance (ionic composition) affects both $C_p$ and $\lambda$, but in different ways: increasing the density of ionic charges increases $C_p$, while thermal conductivity, on the contrary, falls. This emphasizes their separate nature.

Author's formulation: if the author implicitly suggests that some $C_p$ measurement errors are caused by heat-exchange effects (e.g., convection speed, evaporation, etc.), this should be checked: calorimetry tries to ensure uniform heating and minimize heat loss. If, on the other hand, we are talking about different substances "retaining heat" in their own way (thermal resistance), that is a separate effect that does not determine $C_p$.

Status: Incorrect formulation of the effect. Heat capacity and heat transfer are different concepts. Their role in experiments is different: the first is an internal characteristic, the second is external heat transfer. The author's proposal to link them directly has no support in the literature. Nevertheless, when analyzing results one must take into account that the thermal conductivity of the medium can affect heating dynamics (e.g., samples with low $\lambda$ heat unevenly), but this does not change the true value of $C_p$.
4. Mineralization/ionic conductivity of water and its link with heat transfer

Author's hypothesis: the presence of dissolved salts (mineralization), ionic conductivity affect heat transfer and, possibly, the heat capacity of water. In other words, "water with salt" behaves differently when heated because of the ionic component.

Scientific analogue: These are studies of the thermophysical properties of solutions. Aqueous electrolyte (salt) solutions are well studied: salt changes density, viscosity, electrical conductivity, as well as the heat capacity and thermal conductivity of the solution. There is no separate established theory linking conductivity ($\sigma$) and heat capacity (Cp) directly, but the dependences of Cp and λ on ionic concentration are measured experimentally.

What is known: Modern studies show that adding ions changes both Cp and λ polynomially depending on ion radius and charge density. For example, in [9†] (2025) it was found that as the ion radius increases, the solution's Cp decreases (by up to –12%), while as the ion's surface charge density increases, Cp grows (up to +15%). Thermal conductivity in this case decreases as charge grows (–8–20%). The Abed et al. (2024) experiment shows that for NaCl solution the specific heat capacity falls as salt concentration rises (i.e., water loses its ability to accumulate heat). This is found in many sources: salt "lowers the heat capacity" of water. Note that these experiments were carried out at constant pressure; they confirm that salt water takes in less heat at the same ΔT.

Experimental data: [11†L47-L54] demonstrates: at 25% salt the heat capacity of water decreased noticeably (although the boiling point dropped). [9†L31-L39] quantitatively links the influence of ionic properties to Cp and λ. In addition, modification of the molecular structure of water by ions (hydration shells) is a known topic (see the influence of salt ions on water structure).

Author's formulation: if the author assumes that the thermal conductivity of water depends on its ionic conductivity (eletrical conductivity), then this is incorrect directly: these are different mechanisms. Salt affects all thermal properties by changing composition. An unexpected "new" discovery is unlikely: this is an ordinary result of physical chemistry of solutions.

Status: A known, well-documented situation. The influence of salts on the heat capacity of water is a standard topic in physical chemistry of solutions. There is no novelty here. The author may consider only a specific numerical observation original (if it is new), but at the general level this is expected: mineralization changes $C_p$ (usually downward).
5. The influence of sugar stereochemistry/structure on the heat capacity of solutions

Author's hypothesis: the kind of sugar molecules (their cyclic configuration, arrangement of –OH groups) affects the heat capacity of the solution. Possibly the author assumes that "different stereoisomers structure water differently, thereby changing $C_p$".

Scientific analogue: This is about how dissolved organic molecules affect the structure of water (around them) – hydration effects and conformations. Chemistry knows that stereochemical isomers (e.g., D- and L-forms of sugars) interact differently with water (due to different OH arrangement). This area is "stereochemistry of aqueous solutions" and conformational studies. Specifically on heat capacity: links with hydration lead to the so-called "structural contribution" to the Cp of solutions.

What is known: The literature considers aqueous solutions of monosaccharides: melting points, water activities and even heat capacities. Thus, a found source indicates that the form of the sugar affects the formation of the hydrogen network. It is also known that the heat capacity of sugar solutions grows with increasing water content and depends on the type of sugar (although [15] is an English source on the dependence on concentration and temperature). However, there are few direct works comparing the $C_p$ of different sugar stereoisomers. Note that the specific Cp numbers for dry sugars are very similar (see reference books, Cp of glucose ≈1.3 kJ/(kg·K), sucrose ≈1.34 kJ/(kg·K), they differ little). But in solution the effect may be visible through changes in water structure: for example, "hydrophobic hydration" or orientational effects. The studied article [19†L3425-L3433] says that stereochemistry affects the molecule's compatibility with water's three-dimensional H-bond network and the number of hydrate molecules ("fewer hydration shells where it 'fits' better").

Experiments: No direct measurement of the influence of sugar stereochemistry on Cp has been found. It is known that different carbohydrates show different hydration patterns (including conformational differences). This is consistent with the hypothesis that "different" sugars may have slightly different thermal effects. However, there is little convincing quantitative data specifically on Cp.

Author's formulation vs literature: The idea is taken into account in modern studies of solution properties. The author's formulation is unusual, but has a close analogue: discussion of how the structural features of a dissolved substance (configuration, polarity) affect the specific heat capacity and entropy of dissolution. However, it does not "reveal previously unknown phenomena": such effects have already been discussed (see [19] and reviews on carbohydrate hydration).

Status: A partially known/refinable hypothesis. The link between the molecular structure of dissolved sugar and the heat capacity of the solution is not considered a "discovery", but needs clarification. If the author puts forward a specific conclusion (e.g., that stereochemistry sharply changes Cp), this must be checked – existing sources hint at an effect but do not confirm a strong influence.
6. Water vs oils/fats: the choice of "thermal oils" and biological fat

Author: mentions thermal oils and biological fat (e.g., animal fat), probably in the context of comparisons with water. It seems the author experimented with water, oils and fat and tried to understand their difference in heat capacity.

Scientific analogue: This is a typical engineering problem: comparing the heat capacities of different liquids (water, oils, fats). There is a lot of reference data and publications on the Cp of various substances, including vegetable/mineral oils, animal fats, water. In fact, it is hard to find a special chapter (or article), but applied literature gives values. One application is the design of heat exchangers, where heat carriers are selected ("thermal oils" – e.g., silicone or mineral oils with high heat capacity and stability).

What is known: It is known that water has a very high Cp ≈4.18 kJ/(kg·K), while most oils and fats are about half that. For example, studies show the Cp of vegetable oils is around 1.8–2.5 kJ/(kg·K) at room temperature. In [23†L50-L54] a blended vegetable oil gave Cp≈3.229 kJ/(kg·K) (at low temperatures). General data:

<ul>
    <li>Water ~4.18 kJ/(kg·K) (usually cited).</li>
    <li>Oils (vegetable, animal) lie roughly in the range 1.8–3.3 (depending on composition, saturation). Fat (animal fat) is similar to oil, there is little specific data, but it is close to 2 kJ/kg·K.</li>
</ul>

The study by Zhu et al. 2018 [27] (see abstract excerpt) says that the density and saturation of fatty acids affect the Cp of lipids, and a prediction model based on average carbon number and double bonds was built. This confirms: the chemical structure of fat (chain length, saturation) really does affect heat capacity.

Reason for choosing thermal oils and fat: Perhaps the author uses them as examples of media with a different structure and low Cp. But if it is claimed that their Cp is higher or that heat release is unusual, this contradicts known facts – oils have significantly lower Cp. In particular, oil heats more slowly at the same Q (see [22] and [23]).

Difference in formulation: If the author notes that oils "accumulate" heat worse – this is expected (low Cp). But if he says oils are capable of something special in heating, this needs checking. Based on [23†L50-L54] and general tables, there are no "miracles": the heat capacity of fats and oils is mundane and well studied.

Status: A known situation. The physical properties of oils and fats, including Cp, are described in food chemistry and engineering. There are no special novelties here. The author apparently simply compares water with other heat-transfer liquids. This is logical, but opens nothing new.
7. Evaporation, vapor film, surface geometry and boiling

Author: mentions a vapor-forming film and the shape of the vessel (geometry) affecting the boiling process. Possibly the Leidenfrost effect is implied (when a droplet "floats" on a layer of vapor over a very hot surface) or the role of container shape.

Scientific analogue: This is thermohydrodynamics of a phase transition (boiling). Boiling regimes are known: with surface overheating – film boiling (Leidenfrost), with moderate overheating – nucleate (bubbly) boiling, there is a critical heat flux, etc. Wall shape and vessel material affect heat distribution and the formation of vapor channels. There is a whole science of critical heat flux, "transition flows" and the design of boiling surfaces.

What is known: When the surface temperature of water is noticeably above Tboil, the Leidenfrost effect occurs: an insulating vapor layer forms on the surface, slowing heat transfer. Therefore even on a very hot pan a droplet "floats" and takes a long time to boil away. The COMSOL Blog describes that at ~200°C a droplet "dances" on the vapor. This is a classic (described by Leidenfrost in the 18th century).

Vessel shape and surface (roughness, chemical nature, presence of fins) affect the onset boiling temperature and heat transfer efficiency. There are scientific works on the influence of surface topography and roughness on boiling regimes (e.g., a rougher surface can lower the critical Leidenfrost temperature, improve heat removal). However, this is a very specialized area of engineering thermophysics.

Experiments: Classic experiment: compare the heating rate of water on a smooth plate and on a rough/textured one; the time to boiling changes. Many studies show that special coatings/grooves can "extend" peak boiling performance by breaking the vapor film. Precise review: e.g. "Pool boiling heat transfer: Critical Heat Flux" (T. Tran, Handbook).

Author's formulation: If the author's hypothesis is that the vapor film "sits on" the heating results, this corresponds to the Leidenfrost phenomenon. However, it occurs at temperatures significantly above the normal boiling temperature (≈200°C in field conditions). If boiling normally, there will be no film (intense nucleate boiling occurs). Vessel geometry affects convection, but correctly accounting for this role is difficult. If the author noticed that one kettle shape "heats better", this may be due to a difference in heat exchange.

Status: A partially known/special hypothesis. The vapor-film effect and surface influence are well studied in heat transfer. If the author believed this explained his kettle experiment, then perhaps his conditions coincided with the onset of the film (or he observed some para-effect). It is impossible to claim a "discovery" here – all these phenomena are described. However, the factors noted by the author (e.g., vessel shape) really do affect boiling processes – they are simply engineering nuances.
8. Mechanical stirring/pouring and the link between mechanical energy and heating

Author: believes that when stirring or pouring, a liquid can heat up due to the mechanical work expended. Perhaps he noticed a temperature rise after vigorous stirring, pouring from one container to another, etc.

Scientific analogue: Any mechanical work done on a liquid ultimately turns into heat through viscous friction and turbulence. This is a fundamental rule (the second law of thermodynamics). For example, when oil is stirred it heats through turbulence (these are the principles of hydraulic machines). In household experiments the effect can be very weak: to noticeably heat a cubic decimeter of water you need to do a lot of work (you can't whip it that hard with a mug).

What is known: Intense stirring really does lead to heating: there are even special "stirrer-heaters" for hydrogen machines and the like. In hydrodynamics theory this is viscous heat (friction losses). In the mentioned study [33†] (2022) it is shown that with strong stirring water heats up due to viscous dissipation, and efficiency depends on properties: more heating for dense and poorly heat-absorbing liquids. The article says directly: "Generalmente hablando, el efecto calorífico del agitado aumenta con la densidad y disminuye con la capacidad térmica". Also: "Viscous dissipation is the main path of heating during stirring". These results refer to special devices, but the general idea is the same.

Experiments: For home conditions the temperature rise from short stirring is minimal. But you can do an experiment: cool the water, stir it vigorously by hand – the temperature rises slightly. This is also described on Physics StackExchange: "stirring increases temperature due to viscous friction". In the literature stirring is considered as a method of direct energy conversion (e.g., in wind turbines).

Author's formulation: If the author suggests taking this into account in the analysis, then yes, science acknowledges it – mechanical work turns into heat. But one must keep in mind the small magnitude of the effect: heating from hand stirring of water is slight because of its low viscosity. The author did not discover anything new, he simply recalled something long known: Stirring causes heating.

Status: A known effect. Conversion of mechanical energy into heat through viscosity is standard physics (see the laws of thermodynamics and hydrodynamics). There is no "discovery" here, but if the author experimentally accounted for this effect, it is a practical-physical thought (read as "a small correction").
9. Gas compression/expansion

Author: mentions that when air (or another gas) is compressed, temperature changes and this affects thermal processes in the system. Perhaps while pouring or in a vessel above water the idea arose that air compresses and heats the water.

Analogue: Classical thermodynamics of an ideal gas: adiabatic compression raises the gas temperature, expansion lowers it. This is described by equations: if fast, at $Q=0$, $T$ changes according to $PV^\gamma={\rm const}$. This is generally accepted and is the basis of heat engines (e.g., a diesel engine heats up on the compression stroke).

What is known: Adiabatic compression (e.g., with a gas pump) heats the gas. However, with ordinary heating of water in an open kettle the pressure is almost atmospheric, there are no large gradients. If the author changed pressure in a sealed vessel, then yes, the gas temperature changes. But this is again transferred to the water through heat exchange. The reverse phenomenon – expansion (e.g., from an atomizer) – gives cooling (see refrigerators). No "new thermal properties of water" arise here: it is simply heat transfer/loss due to work with the gas.

Experiments: The physics of a boat pump: if you pump quickly – it gets hot; similarly, a hair dryer heats air through a narrowing channel. But in a kettle or when measuring Cp such effects are usually not taken into account, since they are small if compression is not significant.

Author: Perhaps he thinks that in a closed volume during fast processes air somehow "helps" heat the water. Scientifically: with isochoric (rigidly closed) compression the energy will heat the water, with isobaric it will not (because heat leaves).

Status: Known gas laws. Compression–expansion of gas is classical thermodynamics. If the author attached great importance to this in his experiment, the scales need to be clarified. But the hypothesis itself is well known.
10. IR absorption, molecular vibrations and Brownian motion

Author: assumes that infrared radiation absorbed by water, its molecular vibrations and Brownian motion of particles affect heating and heat capacity. Perhaps he heard that "IR heating gives an advantage" or "Brownian motion transfers heat".

Scientific analogue:

<ul>
    <li>IR absorption: water really does absorb IR well in certain ranges (water molecules have vibrational transitions in the ~3–6 µm region, corresponding to O–H bonds). This is well known in optics and spectroscopy (IR spectra of water have strong bands at 3.0 and 6.0 µm). This is exactly what saunas (IR heating) and microwave ovens use (water's absorption coefficient depends on frequency).</li>
    <li>Molecular vibrations: directly related to heat capacity: heat goes into exciting vibrational modes. We already mentioned that vibrational levels participate in $C_p$.</li>
    <li>Brownian motion: this is the thermal motion of dispersed particles; it is related to temperature (described by Einstein). Brownian motion by itself has no large-scale effect on the mean $C_p$: it manifests itself when suspended particles are present (on average in a pure liquid there is no "individual" Brownian contribution beyond the three components).</li>
</ul>

What is known:

<ul>
    <li>Water absorbs IR: small impurities or air/glass themselves may absorb, but water matters more. Fact: condensed water has intense IR bands near 3450 and 1640 cm⁻¹ (see [48†L1-L4]). Thus external IR radiation can heat water. This does not change $C_p$, but quickly transfers energy into molecules (like any heat).</li>
    <li>Vibrational modes: said above. Sucrose/water molecules have 9 molecular modes, including two O–H stretches, etc., which contribute at high temperatures.</li>
    <li>Brownian motion: its role is a manifestation of the existing kinetic energy of particles; by itself it is not an "additional energy storage mode".</li>
</ul>

Author's claims: If the author believes that "IR specifically increases heat capacity", there is no such effect in exact science – IR simply supplies heat from outside. If "molecular vibrations" are the same $C_p$ mechanism, then this is true and already included in the model (see above). The idea about Brownian motion ("this constant vibration helps retain heat") is physically wrong: Brownian motion exists at any temperature anyway and is not a source of extra energy.

Status: A mixture of known phenomena. All the mentioned processes are known and described. Their direct relation to $C_p$: water absorbs IR at molecular transitions (this is simply a way to heat it), molecular vibrations form heat capacity (an excellent factual basis), Brownian motion reflects temperature (adds nothing new). No "new link" between them has been established by science, and especially not between electricity (see below).
11. Thermocouple/Seebeck effect: the link between thermal and electrical transfer

Author: talks about thermocouples and the Seebeck effect, perhaps believing that heat and electricity are linked at a deeper level. Perhaps he thinks that changing the temperature of water can cause an electrical signal or vice versa.

Scientific analogue: Seebeck/Peltier/Thomson effects are part of thermoelectricity. When there is a temperature difference along a conductor, an EMF arises (Seebeck). Similarly, current flowing between different metals creates heating/cooling at the contacts. But these are specific materials and devices (thermocouples, semiconductors), not the same as water. In the strict sense, "heat" is chaotic energy, while "electricity" is an ordered flow of charged particles; their natures are different.

What is known:

<ul>
    <li>Thermoelectric effect: "the thermoelectric effect is the direct conversion of a temperature difference into voltage and vice versa through a thermocouple". In a pure metal the link between thermal and electrical conductivity is expressed by the Wiedemann–Franz law (see below). But in dielectrics (water is a dielectric) there are no free charges, so there are few direct analogues.</li>
    <li>The Wiedemann–Franz law states that in metals thermal and electrical conductivity are linked: $\kappa/\sigma \propto T$. This is true because both heat and charge are carried by electrons. However, water and non-metals do not have this.</li>
    <li>Joule heating – when electric current passes through a conductor, heat is released (Joule–Lenz law). But this is simple resistance and not a "new phenomenon".</li>
</ul>

Author's hypothesis: "the nature of heat and electricity is linked" is essentially a metaphysical idea or a hint at some unified explanation. In modern physics heat (thermodynamics) and electricity are linked only through the described effects: thermoelectricity and conductors.

Status: Incorrect formulation. There is no direct link between the "nature" of heat and electricity beyond the known effects. Everything described – thermoelectricity (Seebeck/Peltier), the Wiedemann–Franz law and resistive heating – has long been known and has strict formulations. If the author suggested that water itself somehow generates current when heated – this is not observed without special materials.
Final table: what is known and what may be the contribution
Hypothesis (author's)	Scientific analogue/terms	State of knowledge	Novelty
1. Heat capacity as response to internal molecular modes and energy redistribution	Energy of degrees of freedom (translational, rotational, vibrational); Debye/Einstein models	Classical theory of heat capacity. It is believed that $C_p$ depends on excited modes: under normal conditions for a liquid all vibrational contributions are partially excited.	Already known. The author merely repeats the basic concept.
2. Influence of intermolecular interactions (H-bonds, conformations) on $C_p$	Structural anomaly of water; contribution of potential energy of interactions	Water is anomalous because of H-networks. Literature links high $C_p$ of water to rearrangements in the hydrogen-bond network (LDL/HDL density fluctuations).	Partially known. The effect has been discussed, but the author may introduce new nuances; clearly not a prophetic new discovery.
3. Role of heat transfer ability vs heat capacity (thermal conductivity vs $C_p$)	Thermal diffusivity; distinction between thermal conductivity and heat capacity; Wiedemann–Franz law	Different quantities. It is established that $\lambda$ and $C_p$ are different characteristics. In metals they are linked by Wiedemann–Franz, but for insulators (water) there is no such link.	Incorrect formulation. This is not the author's mistake but a confusion of concepts. Discussed in the literature: a material's ability to conduct heat (λ) is not equal to its $C_p$.
4. Mineralization/ionic conductivity effects on heat transfer and $C_p$	Heat capacity and thermal conductivity of electrolytes; ion hydration	Experimentally proven. Adding salts lowers $C_p$ of water (see Abed et al. 2024) and changes λ (Kambarova et al. 2025).	Already known. The fact has long been studied (see scientific works). No novelty, except maybe new numbers.
5. Sugar stereochemistry/structure affects $C_p$ of solution	Hydration and conformations of sugars; structure of the water network	Partially studied. It is known that stereochemistry affects hydration (molecules "fit" into the water network differently). However, little has been published on the effect on Cp.	No direct analogue found. The hypothesis is real (similar studies exist) – partially known. Novelty is possible if a significant effect is found.
6. Water vs oils/fats: reason for choosing thermal oils and bio-fat	Specific heat of water and lipids; fatty acid packing models	Material properties. Water $C_p=4{,}18$, oils and fats ~2–3 kJ/(kg·K) (e.g. vegetable oils ~3.2 kJ/(kg·K)). Studies of fatty acids show that structure (chain length C, saturation) affects Cp.	Known. All these values are in reference books. No "discoveries". Perhaps the author simply showed the dependence under his own conditions.
7. Evaporation, vapor film, surface geometry and boiling	Boiling: regimes (nucleate vs film boiling), Leidenfrost effect	Heat transfer in boiling. When surface T >> Tboil, film boiling (Leidenfrost) occurs. Vessel/surface shape affects heat transfer (there are studies on roughness, fins, etc.).	Partially known. The Leidenfrost effect is well studied. Specific geometric nuances are engineering details, not a discovery.
8. Mechanical stirring/pouring and heating (conversion of mechanical to thermal)	Viscous heating; motors on bearings; hydrodynamics theory	Viscous dissipative heat. Indeed, mechanical work (stirring) turns into heat through viscous friction. Known: efficiency depends on fluid properties (ρ, η, Cp).	Known. Science acknowledges that stirring raises temperature. The author apparently noticed this himself; the idea is not new.
9. Gas compression/expansion	Adiabatic processes of an ideal gas	1st law of thermodynamics. Adiabatic compression of a gas raises its temperature, expansion lowers it. These laws are described by equations of state (yes, it works when heated).	Known. General gas laws (PV^γ, cycle). Nothing new.
10. IR absorption, molecular vibrations and Brownian motion	Infrared spectroscopy; vibrational contribution to Cp	Classical physics. Water absorbs IR (peaks at 3450 and 1640 cm⁻¹). Molecular vibrations are part of $C_p$. Brownian motion is a manifestation of temperature, not an additional energy store.	Incorrectly formulated. The facts are known, but the author's interpretation is muddled. No new discovery.
11. Thermocouple/Seebeck effect: link between heat and electricity	Thermoelectric effect (Seebeck/Peltier); Wiedemann–Franz law	Thermoelectricity. A temperature gradient creates voltage (Seebeck). In metals $\kappa/\sigma∝T$ (W–F law). Electric current can heat (Joule heating).	Incorrectly formulated. The link is known through thermal effects, but the author proposes something beyond them (reference to a "unified nature" of heat and electricity is unjustified).

The table gives an approximate status for each hypothesis: "known" – if the idea has long been confirmed in the literature; "partially known" – if similar concepts exist but the author's formulations are non-standard; "no direct analogue found" – if there were no explicitly similar ideas (and clarification is required); "incorrect formulation" – if the idea contradicts established theories; "new testable formulation" – if the hypothesis may be original and is worth checking experimentally.
What is already known and what may be the author's contribution

As the review shows, most of the proposed hypotheses rely on well-studied phenomena: the thermal properties of water, the effect of salts, molecular kinetics, thermoelectric effects. The author's novelty may lie not in the phenomena themselves, but in the combination or presentation: for example, it is interesting to check whether $C_p$ changes under the specific conditions he considers. Potential contributions include:

<ul>
    <li>Precise experiment: if the author measured some non-standard combinations (e.g., Cp in a water–oil mixture, or Cp of highly mineralized water under different boiling regimes). If these data are new, they add to the database of experimental measurements.</li>
    <li>Combinations of effects: even if all phenomena are separately known, their contribution to a specific experiment may not have been considered before. The author's analysis (with all its assumptions) can be revised and refined.</li>
    <li>Measurement technique: the remark about stirring or vessel shape, though not a "discovery", may be useful for precision measurements.</li>
</ul>

However, it is impossible to credit the author with priority for a great discovery: all key hypotheses fit into the existing physico-chemical picture. Of what he formulates, the most likely valuable thing would be to publish the results of precise measurements of the heat capacity of various systems, even if the interpretation of known effects. No new physics is visible here yet. The main caution: a contradiction with the "accepted" theory does not cancel the observed facts, but requires careful checking of all assumptions and experimental conditions.

Conclusion: the author proposes a combination of known effects, most of which are scientifically justified or relatively trivial. Established scientific facts (given above with citations) should be clearly separated from bold assumptions. If experimentation is needed, one must control exactly the quantity being measured and avoid mixing effects (e.g., not confusing heating rate with heat capacity). If some observations really do not agree with known theory, this is a reason to refine the experiment, not to urgently re-explain fundamental laws.

Recommendation: continue experiments taking into account the identified factors (convection, IR heating, etc.), compare results with literature data on heat capacities of mixtures and solutions, and, if discrepancies are found, formulate new hypotheses. The author's contribution may be in experimental data, but the theoretical justification must rely on the sources and models described above.

References: we have attached literature to each point confirming or explaining the effects under discussion. These sources (scientific articles and reviews) will help clarify details for each hypothesis.

</details>
</pre>

<h2>AI-Slop Reasoning (Gemini)</h2>
<details>
<summary>
Slop 2
</summary>

Overview of the author's hypotheses about heat capacity

Below is a breakdown of all the author's key hypotheses about the heat capacity of water and other media. For each hypothesis it is indicated whether known scientific analogues exist, which terms/theories correspond to it, what is known now (references to literature), and also – where the originality or the illegitimacy of the formulation lies. Each hypothesis is separated: first we conditionally state what the author apparently meant (formulations from him), then – the analysis with scientific sources.
1. Heat capacity as a response to internal molecular processes

Author's formulation (reproduced): the heat capacity of a substance depends on the internal processes of molecules and the redistribution of energy between them. When heated, molecules acquire internal energy (rotation, vibration, etc.), and this is what predetermines the high heat capacity of water.

Scientific analogue: in thermodynamics heat capacity is linked to the number of accessible degrees of freedom (the equipartition theorem, Debye/Einstein models for solids, etc.). For molecules, thermal energy goes into translational, rotational and vibrational motion. At low temperatures vibrational modes are "frozen". For water, as a polyatomic molecule with strong hydrogen bonds, these effects are especially noticeable.

What is known: classical physics explains heat capacity through the contributions of different degrees of freedom: for example, an ideal monatomic gas has $C_V=3/2R$, a diatomic one – more (rotation is included), solids – about $3R$ at ordinary T according to Dulong–Petit and decrease to 0 at $T\to0$ (Debye model). Liquid water has additional anomalies: its heat capacity ($C_p\approx4{,}18\ \mathrm{kJ/kg\cdot K}$) is substantially larger than that of many other liquids. Molecular-dynamics studies confirm that this is related to the excitation of vibrational modes and fluctuations of the hydrogen network. Thus, in models of pure water, a classical simulation without quantum effects (where all vibrations are excited) gives an overestimated $C_p$, while including quantum effects (suppressing high-frequency modes) brings the calculation down to experiment.

Confirmations and experiments: it is well studied that the heat capacity of water is anomalously large at ordinary temperature and has a maximum in the supercooled region (≈230 K). Modern calculations link this to fluctuations in the hydrogen network. Thus the idea of the influence of internal molecular degrees of freedom on $C_p$ is a known fact.

Difference in the author's formulation: the idea itself is not new. What could be erroneous would be mixing this concept with other effects (for example, "energy transfer from outside (IR)" – see below). The author's formulation seems to coincide with the basics of statistical thermodynamics (equipartition). If something else was meant (for example, counting additional conformational energy beyond the standard model), that needs clarification. Be that as it may, the very dependence of $C_p$ on internal molecular processes is already known and described in the physics of liquids.

Status: A known, well-described model. The author's formulation is justified, but in itself is not new.
2. The influence of intermolecular interactions (hydrogen bonds, conformations) on heat capacity

Author's hypothesis: changes in the hydrogen network, molecular configurations and weak interactions affect heat capacity (e.g., water supposedly "easily changes structure" when heated, giving an additional contribution to $C_p$).

Analogue and theory: the intense network of hydrogen bonds in water is a key factor of its anomalies. The term "analogue" here can be served by the theory of water anomalies, where structural rearrangements (intermolecular bonds) contribute to heat capacity. At the dawn of the 20th century it was already recognized that the "potential energy of interaction between molecules" contributes to the heat capacity of a liquid. Modern studies of water anomalies link high $C_p$ to fluctuations of local density (low-density and high-density structures) and H-bonds.

What is known: The work of Chan et al. (2026) shows that the excess heat capacity of water is explained by the transformation of local LDL↔HDL structures, associated with H-bond rearrangement. This agrees with theoretical models of liquid water. Thus the influence of intermolecular forces on heat capacity is a known fact. Other liquids without hydrogen bonds have much lower $C_p$ (the example in [45] compares with methanol, ethanol, etc., see pp. 44–53).

Experiments: There are data on the heat capacity of solutions and various phases of water confirming the role of H-bonds. For example, when salt is added (disrupting the H-network), the $C_p$ of water decreases. For hydrogen isotopes (D₂O) the heat capacity differs from H₂O (it is known that D₂O has slightly higher $C_p$ due to stronger bonds). Molecular conformations (OH angle, positions of H atoms) affect bond energy, which is reflected in heat capacity (see [19] below on sucrose).

Difference in formulation: The author's ideas about conformational changes and associated energies partly coincide with what the literature calls the structural contribution to heat capacity (the microscopic explanation of the anomaly). If the author assumes some new effects (for example, real-time dynamic changes of configurations), no justification has been found yet. Overall this hypothesis is partially known: the contribution of molecular interactions to the heat capacity of a liquid is an accepted concept.

Status: Partially known, described in the literature. Something similar has been considered (the structural component of $C_p$), but if the author sees a specific "new" mechanics, it needs to be formalized more clearly and checked.
3. Heat transfer and heat capacity: distinguishing the ability to conduct/retain heat from heat capacity

Author's idea: heat capacity (the capacity to absorb heat) must be distinguished from thermal conductivity or the ability of a substance to retain heat; perhaps the author confuses these concepts. He seems to think that errors in $C_p$ measurements are related to the heat-transfer or heat-retention characteristics of the sample.

Scientific analogue: Physics distinguishes heat capacity (capacity to absorb heat, $Q=mC_p\Delta T$) from thermal conductivity (the rate of heat transfer through a body). There is also the concept of thermal resistance (ability to retain heat). These quantities are related but not the same. Heat transfer is described by Fourier's equation; it does not include $C_p$, but includes $\lambda$ (thermal conductivity) and density. Engineering introduces thermal diffusivity $\alpha=\lambda/(\rho C_p)$, which combines both. But from the Wiedemann–Franz law it is clear that a link between $C_p$ and $\lambda$ exists only for electron-conducting metals (the pulse part).

What is known: In a pure metal, thermal and electrical conductivity are related by the Wiedemann–Franz law: $\kappa/\sigma \propto T$. In non-conducting liquids (such as water), heat carriers are not electrons, so there is no strong link between $\lambda$ and $C_p$. A classic example: ice (solid; dense crystal) has $\lambda\approx2{,}18\ \mathrm{W/mK}$, while liquid water has only $0{,}56\ \mathrm{W/mK}$ at $0^\circ$C, with comparable $C_p$ (≈2–4 kJ/kgK). This shows that the ability to conduct heat and the ability to absorb it can differ greatly. Thus, confusing heat capacity with thermal conductivity is incorrect. However, their combination matters in transient processes. For example, fast-heating problems look at the thermal penetration coefficient $\alpha$.

Experiments: There are specifically few direct experiments on the "link between $C_p$ and $\lambda$", since these quantities are measured by different methods. From [9†] it can be seen that the solubility of a substance (ionic composition) affects both $C_p$ and $\lambda$, but in different ways: increasing the density of ionic charges increases $C_p$, while thermal conductivity, on the contrary, falls. This emphasizes their separate nature.

Author's formulation: if the author implicitly suggests that some $C_p$ measurement errors are caused by heat-exchange effects (e.g., convection speed, evaporation, etc.), this should be checked: calorimetry tries to ensure uniform heating and minimize heat loss. If, on the other hand, we are talking about different substances "retaining heat" in their own way (thermal resistance), that is a separate effect that does not determine $C_p$.

Status: Incorrect formulation of the effect. Heat capacity and heat transfer are different concepts. Their role in experiments is different: the first is an internal characteristic, the second is external heat transfer. The author's proposal to link them directly has no support in the literature. Nevertheless, when analyzing results one must take into account that the thermal conductivity of the medium can affect heating dynamics (e.g., samples with low $\lambda$ heat unevenly), but this does not change the true value of $C_p$.
4. Mineralization/ionic conductivity of water and its link with heat transfer

Author's hypothesis: the presence of dissolved salts (mineralization), ionic conductivity affect heat transfer and, possibly, the heat capacity of water. In other words, "water with salt" behaves differently when heated because of the ionic component.

Scientific analogue: These are studies of the thermophysical properties of solutions. Aqueous electrolyte (salt) solutions are well studied: salt changes density, viscosity, electrical conductivity, as well as the heat capacity and thermal conductivity of the solution. There is no separate established theory linking conductivity ($\sigma$) and heat capacity (Cp) directly, but the dependences of Cp and λ on ionic concentration are measured experimentally.

What is known: Modern studies show that adding ions changes both Cp and λ polynomially depending on ion radius and charge density. For example, in [9†] (2025) it was found that as the ion radius increases, the solution's Cp decreases (by up to –12%), while as the ion's surface charge density increases, Cp grows (up to +15%). Thermal conductivity in this case decreases as charge grows (–8–20%). The Abed et al. (2024) experiment shows that for NaCl solution the specific heat capacity falls as salt concentration rises (i.e., water loses its ability to accumulate heat). This is found in many sources: salt "lowers the heat capacity" of water. Note that these experiments were carried out at constant pressure; they confirm that salt water takes in less heat at the same ΔT.

Experimental data: [11†L47-L54] demonstrates: at 25% salt the heat capacity of water decreased noticeably (although the boiling point dropped). [9†L31-L39] quantitatively links the influence of ionic properties to Cp and λ. In addition, modification of the molecular structure of water by ions (hydration shells) is a known topic (see the influence of salt ions on water structure).

Author's formulation: if the author assumes that the thermal conductivity of water depends on its ionic conductivity (eletrical conductivity), then this is incorrect directly: these are different mechanisms. Salt affects all thermal properties by changing composition. An unexpected "new" discovery is unlikely: this is an ordinary result of physical chemistry of solutions.

Status: A known, well-documented situation. The influence of salts on the heat capacity of water is a standard topic in physical chemistry of solutions. There is no novelty here. The author may consider only a specific numerical observation original (if it is new), but at the general level this is expected: mineralization changes $C_p$ (usually downward).
5. The influence of sugar stereochemistry/structure on the heat capacity of solutions

Author's hypothesis: the kind of sugar molecules (their cyclic configuration, arrangement of –OH groups) affects the heat capacity of the solution. Possibly the author assumes that "different stereoisomers structure water differently, thereby changing $C_p$".

Scientific analogue: This is about how dissolved organic molecules affect the structure of water (around them) – hydration effects and conformations. Chemistry knows that stereochemical isomers (e.g., D- and L-forms of sugars) interact differently with water (due to different OH arrangement). This area is "stereochemistry of aqueous solutions" and conformational studies. Specifically on heat capacity: links with hydration lead to the so-called "structural contribution" to the Cp of solutions.

What is known: The literature considers aqueous solutions of monosaccharides: melting points, water activities and even heat capacities. Thus, a found source indicates that the form of the sugar affects the formation of the hydrogen network. It is also known that the heat capacity of sugar solutions grows with increasing water content and depends on the type of sugar (although [15] is an English source on the dependence on concentration and temperature). However, there are few direct works comparing the $C_p$ of different sugar stereoisomers. Note that the specific Cp numbers for dry sugars are very similar (see reference books, Cp of glucose ≈1.3 kJ/(kg·K), sucrose ≈1.34 kJ/(kg·K), they differ little). But in solution the effect may be visible through changes in water structure: for example, "hydrophobic hydration" or orientational effects. The studied article [19†L3425-L3433] says that stereochemistry affects the molecule's compatibility with water's three-dimensional H-bond network and the number of hydrate molecules ("fewer hydration shells where it 'fits' better").

Experiments: No direct measurement of the influence of sugar stereochemistry on Cp has been found. It is known that different carbohydrates show different hydration patterns (including conformational differences). This is consistent with the hypothesis that "different" sugars may have slightly different thermal effects. However, there is little convincing quantitative data specifically on Cp.

Author's formulation vs literature: The idea is taken into account in modern studies of solution properties. The author's formulation is unusual, but has a close analogue: discussion of how the structural features of a dissolved substance (configuration, polarity) affect the specific heat capacity and entropy of dissolution. However, it does not "reveal previously unknown phenomena": such effects have already been discussed (see [19] and reviews on carbohydrate hydration).

Status: A partially known/refinable hypothesis. The link between the molecular structure of dissolved sugar and the heat capacity of the solution is not considered a "discovery", but needs clarification. If the author puts forward a specific conclusion (e.g., that stereochemistry sharply changes Cp), this must be checked – existing sources hint at an effect but do not confirm a strong influence.
6. Water vs oils/fats: the choice of "thermal oils" and biological fat

Author: mentions thermal oils and biological fat (e.g., animal fat), probably in the context of comparisons with water. It seems the author experimented with water, oils and fat and tried to understand their difference in heat capacity.

Scientific analogue: This is a typical engineering problem: comparing the heat capacities of different liquids (water, oils, fats). There is a lot of reference data and publications on the Cp of various substances, including vegetable/mineral oils, animal fats, water. In fact, it is hard to find a special chapter (or article), but applied literature gives values. One application is the design of heat exchangers, where heat carriers are selected ("thermal oils" – e.g., silicone or mineral oils with high heat capacity and stability).

What is known: It is known that water has a very high Cp ≈4.18 kJ/(kg·K), while most oils and fats are about half that. For example, studies show the Cp of vegetable oils is around 1.8–2.5 kJ/(kg·K) at room temperature. In [23†L50-L54] a blended vegetable oil gave Cp≈3.229 kJ/(kg·K) (at low temperatures). General data:

<ul>
    <li>Water ~4.18 kJ/(kg·K) (usually cited).</li>
    <li>Oils (vegetable, animal) lie roughly in the range 1.8–3.3 (depending on composition, saturation). Fat (animal fat) is similar to oil, there is little specific data, but it is close to 2 kJ/kg·K.</li>
</ul>

The study by Zhu et al. 2018 [27] (see abstract excerpt) says that the density and saturation of fatty acids affect the Cp of lipids, and a prediction model based on average carbon number and double bonds was built. This confirms: the chemical structure of fat (chain length, saturation) really does affect heat capacity.

Reason for choosing thermal oils and fat: Perhaps the author uses them as examples of media with a different structure and low Cp. But if it is claimed that their Cp is higher or that heat release is unusual, this contradicts known facts – oils have significantly lower Cp. In particular, oil heats more slowly at the same Q (see [22] and [23]).

Difference in formulation: If the author notes that oils "accumulate" heat worse – this is expected (low Cp). But if he says oils are capable of something special in heating, this needs checking. Based on [23†L50-L54] and general tables, there are no "miracles": the heat capacity of fats and oils is mundane and well studied.

Status: A known situation. The physical properties of oils and fats, including Cp, are described in food chemistry and engineering. There are no special novelties here. The author apparently simply compares water with other heat-transfer liquids. This is logical, but opens nothing new.
7. Evaporation, vapor film, surface geometry and boiling

Author: mentions a vapor-forming film and the shape of the vessel (geometry) affecting the boiling process. Possibly the Leidenfrost effect is implied (when a droplet "floats" on a layer of vapor over a very hot surface) or the role of container shape.

Scientific analogue: This is thermohydrodynamics of a phase transition (boiling). Boiling regimes are known: with surface overheating – film boiling (Leidenfrost), with moderate overheating – nucleate (bubbly) boiling, there is a critical heat flux, etc. Wall shape and vessel material affect heat distribution and the formation of vapor channels. There is a whole science of critical heat flux, "transition flows" and the design of boiling surfaces.

What is known: When the surface temperature of water is noticeably above Tboil, the Leidenfrost effect occurs: an insulating vapor layer forms on the surface, slowing heat transfer. Therefore even on a very hot pan a droplet "floats" and takes a long time to boil away. The COMSOL Blog describes that at ~200°C a droplet "dances" on the vapor. This is a classic (described by Leidenfrost in the 18th century).

Vessel shape and surface (roughness, chemical nature, presence of fins) affect the onset boiling temperature and heat transfer efficiency. There are scientific works on the influence of surface topography and roughness on boiling regimes (e.g., a rougher surface can lower the critical Leidenfrost temperature, improve heat removal). However, this is a very specialized area of engineering thermophysics.

Experiments: Classic experiment: compare the heating rate of water on a smooth plate and on a rough/textured one; the time to boiling changes. Many studies show that special coatings/grooves can "extend" peak boiling performance by breaking the vapor film. Precise review: e.g. "Pool boiling heat transfer: Critical Heat Flux" (T. Tran, Handbook).

Author's formulation: If the author's hypothesis is that the vapor film "sits on" the heating results, this corresponds to the Leidenfrost phenomenon. However, it occurs at temperatures significantly above the normal boiling temperature (≈200°C in field conditions). If boiling normally, there will be no film (intense nucleate boiling occurs). Vessel geometry affects convection, but correctly accounting for this role is difficult. If the author noticed that one kettle shape "heats better", this may be due to a difference in heat exchange.

Status: A partially known/special hypothesis. The vapor-film effect and surface influence are well studied in heat transfer. If the author believed this explained his kettle experiment, then perhaps his conditions coincided with the onset of the film (or he observed some para-effect). It is impossible to claim a "discovery" here – all these phenomena are described. However, the factors noted by the author (e.g., vessel shape) really do affect boiling processes – they are simply engineering nuances.
8. Mechanical stirring/pouring and the link between mechanical energy and heating

Author: believes that when stirring or pouring, a liquid can heat up due to the mechanical work expended. Perhaps he noticed a temperature rise after vigorous stirring, pouring from one container to another, etc.

Scientific analogue: Any mechanical work done on a liquid ultimately turns into heat through viscous friction and turbulence. This is a fundamental rule (the second law of thermodynamics). For example, when oil is stirred it heats through turbulence (these are the principles of hydraulic machines). In household experiments the effect can be very weak: to noticeably heat a cubic decimeter of water you need to do a lot of work (you can't whip it that hard with a mug).

What is known: Intense stirring really does lead to heating: there are even special "stirrer-heaters" for hydrogen machines and the like. In hydrodynamics theory this is viscous heat (friction losses). In the mentioned study [33†] (2022) it is shown that with strong stirring water heats up due to viscous dissipation, and efficiency depends on properties: more heating for dense and poorly heat-absorbing liquids. The article says directly: "Generalmente hablando, el efecto calorífico del agitado aumenta con la densidad y disminuye con la capacidad térmica". Also: "Viscous dissipation is the main path of heating during stirring". These results refer to special devices, but the general idea is the same.

Experiments: For home conditions the temperature rise from short stirring is minimal. But you can do an experiment: cool the water, stir it vigorously by hand – the temperature rises slightly. This is also described on Physics StackExchange: "stirring increases temperature due to viscous friction". In the literature stirring is considered as a method of direct energy conversion (e.g., in wind turbines).

Author's formulation: If the author suggests taking this into account in the analysis, then yes, science acknowledges it – mechanical work turns into heat. But one must keep in mind the small magnitude of the effect: heating from hand stirring of water is slight because of its low viscosity. The author did not discover anything new, he simply recalled something long known: Stirring causes heating.

Status: A known effect. Conversion of mechanical energy into heat through viscosity is standard physics (see the laws of thermodynamics and hydrodynamics). There is no "discovery" here, but if the author experimentally accounted for this effect, it is a practical-physical thought (read as "a small correction").
9. Gas compression/expansion

Author: mentions that when air (or another gas) is compressed, temperature changes and this affects thermal processes in the system. Perhaps while pouring or in a vessel above water the idea arose that air compresses and heats the water.

Analogue: Classical thermodynamics of an ideal gas: adiabatic compression raises the gas temperature, expansion lowers it. This is described by equations: if fast, at $Q=0$, $T$ changes according to $PV^\gamma={\rm const}$. This is generally accepted and is the basis of heat engines (e.g., a diesel engine heats up on the compression stroke).

What is known: Adiabatic compression (e.g., with a gas pump) heats the gas. However, with ordinary heating of water in an open kettle the pressure is almost atmospheric, there are no large gradients. If the author changed pressure in a sealed vessel, then yes, the gas temperature changes. But this is again transferred to the water through heat exchange. The reverse phenomenon – expansion (e.g., from an atomizer) – gives cooling (see refrigerators). No "new thermal properties of water" arise here: it is simply heat transfer/loss due to work with the gas.

Experiments: The physics of a boat pump: if you pump quickly – it gets hot; similarly, a hair dryer heats air through a narrowing channel. But in a kettle or when measuring Cp such effects are usually not taken into account, since they are small if compression is not significant.

Author: Perhaps he thinks that in a closed volume during fast processes air somehow "helps" heat the water. Scientifically: with isochoric (rigidly closed) compression the energy will heat the water, with isobaric it will not (because heat leaves).

Status: Known gas laws. Compression–expansion of gas is classical thermodynamics. If the author attached great importance to this in his experiment, the scales need to be clarified. But the hypothesis itself is well known.
10. IR absorption, molecular vibrations and Brownian motion

Author: assumes that infrared radiation absorbed by water, its molecular vibrations and Brownian motion of particles affect heating and heat capacity. Perhaps he heard that "IR heating gives an advantage" or "Brownian motion transfers heat".

Scientific analogue:

<ul>
    <li>IR absorption: water really does absorb IR well in certain ranges (water molecules have vibrational transitions in the ~3–6 µm region, corresponding to O–H bonds). This is well known in optics and spectroscopy (IR spectra of water have strong bands at 3.0 and 6.0 µm). This is exactly what saunas (IR heating) and microwave ovens use (water's absorption coefficient depends on frequency).</li>
    <li>Molecular vibrations: directly related to heat capacity: heat goes into exciting vibrational modes. We already mentioned that vibrational levels participate in $C_p$.</li>
    <li>Brownian motion: this is the thermal motion of dispersed particles; it is related to temperature (described by Einstein). Brownian motion by itself has no large-scale effect on the mean $C_p$: it manifests itself when suspended particles are present (on average in a pure liquid there is no "individual" Brownian contribution beyond the three components).</li>
</ul>

What is known:

<ul>
    <li>Water absorbs IR: small impurities or air/glass themselves may absorb, but water matters more. Fact: condensed water has intense IR bands near 3450 and 1640 cm⁻¹ (see [48†L1-L4]). Thus external IR radiation can heat water. This does not change $C_p$, but quickly transfers energy into molecules (like any heat).</li>
    <li>Vibrational modes: said above. Sucrose/water molecules have 9 molecular modes, including two O–H stretches, etc., which contribute at high temperatures.</li>
    <li>Brownian motion: its role is a manifestation of the existing kinetic energy of particles; by itself it is not an "additional energy storage mode".</li>
</ul>

Author's claims: If the author believes that "IR specifically increases heat capacity", there is no such effect in exact science – IR simply supplies heat from outside. If "molecular vibrations" are the same $C_p$ mechanism, then this is true and already included in the model (see above). The idea about Brownian motion ("this constant vibration helps retain heat") is physically wrong: Brownian motion exists at any temperature anyway and is not a source of extra energy.

Status: A mixture of known phenomena. All the mentioned processes are known and described. Their direct relation to $C_p$: water absorbs IR at molecular transitions (this is simply a way to heat it), molecular vibrations form heat capacity (an excellent factual basis), Brownian motion reflects temperature (adds nothing new). No "new link" between them has been established by science, and especially not between electricity (see below).
11. Thermocouple/Seebeck effect: the link between thermal and electrical transfer

Author: talks about thermocouples and the Seebeck effect, perhaps believing that heat and electricity are linked at a deeper level. Perhaps he thinks that changing the temperature of water can cause an electrical signal or vice versa.

Scientific analogue: Seebeck/Peltier/Thomson effects are part of thermoelectricity. When there is a temperature difference along a conductor, an EMF arises (Seebeck). Similarly, current flowing between different metals creates heating/cooling at the contacts. But these are specific materials and devices (thermocouples, semiconductors), not the same as water. In the strict sense, "heat" is chaotic energy, while "electricity" is an ordered flow of charged particles; their natures are different.

What is known:

<ul>
    <li>Thermoelectric effect: "the thermoelectric effect is the direct conversion of a temperature difference into voltage and vice versa through a thermocouple". In a pure metal the link between thermal and electrical conductivity is expressed by the Wiedemann–Franz law (see below). But in dielectrics (water is a dielectric) there are no free charges, so there are few direct analogues.</li>
    <li>The Wiedemann–Franz law states that in metals thermal and electrical conductivity are linked: $\kappa/\sigma \propto T$. This is true because both heat and charge are carried by electrons. However, water and non-metals do not have this.</li>
    <li>Joule heating – when electric current passes through a conductor, heat is released (Joule–Lenz law). But this is simple resistance and not a "new phenomenon".</li>
</ul>

Author's hypothesis: "the nature of heat and electricity is linked" is essentially a metaphysical idea or a hint at some unified explanation. In modern physics heat (thermodynamics) and electricity are linked only through the described effects: thermoelectricity and conductors.

Status: Incorrect formulation. There is no direct link between the "nature" of heat and electricity beyond the known effects. Everything described – thermoelectricity (Seebeck/Peltier), the Wiedemann–Franz law and resistive heating – has long been known and has strict formulations. If the author suggested that water itself somehow generates current when heated – this is not observed without special materials.
Final table: what is known and what may be the contribution
Hypothesis (author's)	Scientific analogue/terms	State of knowledge	Novelty
1. Heat capacity as response to internal molecular modes and energy redistribution	Energy of degrees of freedom (translational, rotational, vibrational); Debye/Einstein models	Classical theory of heat capacity. It is believed that $C_p$ depends on excited modes: under normal conditions for a liquid all vibrational contributions are partially excited.	Already known. The author merely repeats the basic concept.
2. Influence of intermolecular interactions (H-bonds, conformations) on $C_p$	Structural anomaly of water; contribution of potential energy of interactions	Water is anomalous because of H-networks. Literature links high $C_p$ of water to rearrangements in the hydrogen-bond network (LDL/HDL density fluctuations).	Partially known. The effect has been discussed, but the author may introduce new nuances; clearly not a prophetic new discovery.
3. Role of heat transfer ability vs heat capacity (thermal conductivity vs $C_p$)	Thermal diffusivity; distinction between thermal conductivity and heat capacity; Wiedemann–Franz law	Different quantities. It is established that $\lambda$ and $C_p$ are different characteristics. In metals they are linked by Wiedemann–Franz, but for insulators (water) there is no such link.	Incorrect formulation. This is not the author's mistake but a confusion of concepts. Discussed in the literature: a material's ability to conduct heat (λ) is not equal to its $C_p$.
4. Mineralization/ionic conductivity effects on heat transfer and $C_p$	Heat capacity and thermal conductivity of electrolytes; ion hydration	Experimentally proven. Adding salts lowers $C_p$ of water (see Abed et al. 2024) and changes λ (Kambarova et al. 2025).	Already known. The fact has long been studied (see scientific works). No novelty, except maybe new numbers.
5. Sugar stereochemistry/structure affects $C_p$ of solution	Hydration and conformations of sugars; structure of the water network	Partially studied. It is known that stereochemistry affects hydration (molecules "fit" into the water network differently). However, little has been published on the effect on Cp.	No direct analogue found. The hypothesis is real (similar studies exist) – partially known. Novelty is possible if a significant effect is found.
6. Water vs oils/fats: reason for choosing thermal oils and bio-fat	Specific heat of water and lipids; fatty acid packing models	Material properties. Water $C_p=4{,}18$, oils and fats ~2–3 kJ/(kg·K) (e.g. vegetable oils ~3.2 kJ/(kg·K)). Studies of fatty acids show that structure (chain length C, saturation) affects Cp.	Known. All these values are in reference books. No "discoveries". Perhaps the author simply showed the dependence under his own conditions.
7. Evaporation, vapor film, surface geometry and boiling	Boiling: regimes (nucleate vs film boiling), Leidenfrost effect	Heat transfer in boiling. When surface T >> Tboil, film boiling (Leidenfrost) occurs. Vessel/surface shape affects heat transfer (there are studies on roughness, fins, etc.).	Partially known. The Leidenfrost effect is well studied. Specific geometric nuances are engineering details, not a discovery.
8. Mechanical stirring/pouring and heating (conversion of mechanical to thermal)	Viscous heating; motors on bearings; hydrodynamics theory	Viscous dissipative heat. Indeed, mechanical work (stirring) turns into heat through viscous friction. Known: efficiency depends on fluid properties (ρ, η, Cp).	Known. Science acknowledges that stirring raises temperature. The author apparently noticed this himself; the idea is not new.
9. Gas compression/expansion	Adiabatic processes of an ideal gas	1st law of thermodynamics. Adiabatic compression of a gas raises its temperature, expansion lowers it. These laws are described by equations of state (yes, it works when heated).	Known. General gas laws (PV^γ, cycle). Nothing new.
10. IR absorption, molecular vibrations and Brownian motion	Infrared spectroscopy; vibrational contribution to Cp	Classical physics. Water absorbs IR (peaks at 3450 and 1640 cm⁻¹). Molecular vibrations are part of $C_p$. Brownian motion is a manifestation of temperature, not an additional energy store.	Incorrectly formulated. The facts are known, but the author's interpretation is muddled. No new discovery.
11. Thermocouple/Seebeck effect: link between heat and electricity	Thermoelectric effect (Seebeck/Peltier); Wiedemann–Franz law	Thermoelectricity. A temperature gradient creates voltage (Seebeck). In metals $\kappa/\sigma∝T$ (W–F law). Electric current can heat (Joule heating).	Incorrectly formulated. The link is known through thermal effects, but the author proposes something beyond them (reference to a "unified nature" of heat and electricity is unjustified).

The table gives an approximate status for each hypothesis: "known" – if the idea has long been confirmed in the literature; "partially known" – if similar concepts exist but the author's formulations are non-standard; "no direct analogue found" – if there were no explicitly similar ideas (and clarification is required); "incorrect formulation" – if the idea contradicts established theories; "new testable formulation" – if the hypothesis may be original and is worth checking experimentally.
What is already known and what may be the author's contribution

As the review shows, most of the proposed hypotheses rely on well-studied phenomena: the thermal properties of water, the effect of salts, molecular kinetics, thermoelectric effects. The author's novelty may lie not in the phenomena themselves, but in the combination or presentation: for example, it is interesting to check whether $C_p$ changes under the specific conditions he considers. Potential contributions include:

<ul>
    <li>Precise experiment: if the author measured some non-standard combinations (e.g., Cp in a water–oil mixture, or Cp of highly mineralized water under different boiling regimes). If these data are new, they add to the database of experimental measurements.</li>
    <li>Combinations of effects: even if all phenomena are separately known, their contribution to a specific experiment may not have been considered before. The author's analysis (with all its assumptions) can be revised and refined.</li>
    <li>Measurement technique: the remark about stirring or vessel shape, though not a "discovery", may be useful for precision measurements.</li>
</ul>

However, it is impossible to credit the author with priority for a great discovery: all key hypotheses fit into the existing physico-chemical picture. Of what he formulates, the most likely valuable thing would be to publish the results of precise measurements of the heat capacity of various systems, even if the interpretation of known effects. No new physics is visible here yet. The main caution: a contradiction with the "accepted" theory does not cancel the observed facts, but requires careful checking of all assumptions and experimental conditions.

Conclusion: the author proposes a combination of known effects, most of which are scientifically justified or relatively trivial. Established scientific facts (given above with citations) should be clearly separated from bold assumptions. If experimentation is needed, one must control exactly the quantity being measured and avoid mixing effects (e.g., not confusing heating rate with heat capacity). If some observations really do not agree with known theory, this is a reason to refine the experiment, not to urgently re-explain fundamental laws.

Recommendation: continue experiments taking into account the identified factors (convection, IR heating, etc.), compare results with literature data on heat capacities of mixtures and solutions, and, if discrepancies are found, formulate new hypotheses. The author's contribution may be in experimental data, but the theoretical justification must rely on the sources and models described above.

References: we have attached literature to each point confirming or explaining the effects under discussion. These sources (scientific articles and reviews) will help clarify details for each hypothesis.

</details>

<hr/>
<br/>
<hr/>
<b>So in the end, the slop was no help except to dump a pile of text and claim the model is wrong only because it doesn't match something out there. But it produced a hell of a lot of text. That is, an imitation of vigorous research. But as can be seen, most of my hypotheses have already been discovered by someone else. So we're moving in the right direction.</b>
<p>Why?</p>
<quote>Status: Incorrect formulation of the effect. Heat capacity and heat transfer are different concepts. </quote>
<p>Nah, they're different. Like joules and Celsius maybe, but the idea of heat capacity and heat transfer is that if you pour water into a thermos, it won't heat the apartment. That's what we originally dug here for. Even though the concepts are different, they are CLOSE in nature</p>

<hr/>
<p>More experiments (if the work gets updated. For now the conclusion is this – heat capacity is conditional, an oversimplified model. You need to dig deeper into the nature of how some abstract energy accumulates into real energy, as well as the fact that heat and electricity may be directly interconnected at some level and heat transfer and current transfer may be proportional to or dependent on each other. As is known, cooled metal conducts current better. Does the heat capacity of cooled metal increase? The slop says – it decreases. And does the heat capacity of water decrease when it is saturated with electrolytes? The slop says – Yes. When electrolytes dissolve, the heat capacity of water usually decreases)</p>


<hr/>
<p>Summary</p>
<ul>
    <li><b>Heat capacity and electrical conductivity are somehow interconnected</b></li>
    <li>The same experiment can give different results</li>
    <li>Some models are too simplified, but others are too complicated. The model should be simple to understand and close to the truth</li>
    <li>To heat a house with a heated liquid, you also need to take into account the possibility of transferring that heat, not just how much you can store. Under some conditions a thermal fluid will be more profitable than the anomalous properties of water. And in some cases this water, if electrolytes lower it, will be worse than pure oil.</li>
    <li>In short, in nature and in engineering they sometimes prefer not water, with its miraculous properties maybe in distilled form, but some other thermal oils and natural fat for heat transfer. Just as water is used for heating liquids below 100 degrees, and other liquids above that.</li>
    <li><b>Heat and electricity may be interconnected</b></li>
</ul>

<p><b style='color:red'>T</b>he end of the article. The main things I considered important are in bold. The rest can be skipped, only to understand how I came to this and why I think so.</p>
