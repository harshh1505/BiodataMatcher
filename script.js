// Mouse Tracking for dynamic background
document.addEventListener('mousemove', (e) => {
    const glow = document.getElementById('bgGlow');
    const x = e.clientX;
    const y = e.clientY;
    glow.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
});

function generateRoast() {
    // Get all form values
    const profileA = {
        name: document.getElementById('nameA').value || 'Profile A',
        age: parseInt(document.getElementById('ageA').value) || 0,
        height: parseFloat(document.getElementById('heightA').value) || 0,
        complexion: document.getElementById('complexionA').value,
        education: document.getElementById('educationA').value,
        profession: document.getElementById('professionA').value,
        package: parseFloat(document.getElementById('packageA').value) || 0,
        location: document.getElementById('locationA').value,
        familyType: document.getElementById('familyTypeA').value,
        hobbies: document.getElementById('hobbiesA').value,
        habits: document.getElementById('habitsA').value,
        manglik: document.getElementById('manglikA').value,
        expectedSalary: parseFloat(document.getElementById('expectedSalaryA').value) || 0,
        relocate: document.getElementById('relocateA').value,
        requirements: document.getElementById('requirementsA').value
    };

    const profileB = {
        name: document.getElementById('nameB').value || 'Profile B',
        age: parseInt(document.getElementById('ageB').value) || 0,
        height: parseFloat(document.getElementById('heightB').value) || 0,
        complexion: document.getElementById('complexionB').value,
        education: document.getElementById('educationB').value,
        profession: document.getElementById('professionB').value,
        package: parseFloat(document.getElementById('packageB').value) || 0,
        location: document.getElementById('locationB').value,
        familyType: document.getElementById('familyTypeB').value,
        hobbies: document.getElementById('hobbiesB').value,
        habits: document.getElementById('habitsB').value,
        manglik: document.getElementById('manglikB').value,
        expectedSalary: parseFloat(document.getElementById('expectedSalaryB').value) || 0,
        relocate: document.getElementById('relocateB').value,
        requirements: document.getElementById('requirementsB').value
    };

    // Generate roasts
    const roastsA = generateIndividualRoasts(profileA, 'A');
    const roastsB = generateIndividualRoasts(profileB, 'B');
    const compatibilityRoasts = generateCompatibilityRoasts(profileA, profileB);

    // Display results
    displayResults(profileA, profileB, roastsA, roastsB, compatibilityRoasts);

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function generateIndividualRoasts(profile, label) {
    const roasts = [];

    // Height roasts
    if (profile.height > 0) {
        if (profile.height < 5.4) {
            roasts.push(`📏 Height: ${profile.height}ft - Personality better be taller than you are!`);
        }
        if (profile.height > 6.2) {
            roasts.push(`📏 Height: ${profile.height}ft - Beta, leave some height for the rest of us. This isn't NBA trials.`);
        }
    }

    // Complexion roasts
    if (profile.complexion === 'fair') {
        roasts.push(`🎨 "Fair complexion" - Congratulations on keeping colonial beauty standards alive in 2025! 👏`);
    }
    if (profile.complexion === 'wheatish') {
        roasts.push(`🎨 "Wheatish" - The most diplomatic word ever invented. Just say brown and move on, beta.`);
    }

    // Education roasts
    const eduLower = profile.education.toLowerCase();
    if (eduLower.includes('engineer') || eduLower.includes('b.tech') || eduLower.includes('b.e')) {
        roasts.push(`🎓 Engineering degree - So original! There are 12 lakh engineer couples already. But sure, add one more.`);
    }
    if (eduLower.includes('mba')) {
        roasts.push(`🎓 MBA - Corporate jargon at home? "Let's synergize our marriage goals, beta!"`);
    }

    // Salary roasts
    if (profile.package > 0 && profile.expectedSalary > 0) {
        const ratio = profile.expectedSalary / profile.package;
        if (ratio > 2) {
            roasts.push(`💰 Earns ₹${profile.package}L but expects partner to earn ₹${profile.expectedSalary}L - That's not a rishta, that's a business proposal!`);
        }
        if (ratio > 3) {
            roasts.push(`💸 Salary expectations are 3x your own package? Sir/Ma'am, the audacity. The delusion. *Chef's kiss*`);
        }
    }

    // Hobbies roasts
    const hobbiesLower = profile.hobbies.toLowerCase();
    if (hobbiesLower.includes('reading') && hobbiesLower.includes('music') && hobbiesLower.includes('travel')) {
        roasts.push(`🎭 "Reading, music, travel" - The holy trinity of having no actual personality. Every biodata ever!`);
    }
    if (hobbiesLower.includes('cooking') && hobbiesLower.length < 30) {
        roasts.push(`👨‍🍳 "Cooking" as only hobby - Tell me you were forced to write this without telling me.`);
    }

    // Family type roasts
    if (profile.familyType === 'joint') {
        roasts.push(`👨‍👩‍👧‍👦 Joint family - Mother-in-law included free of cost! What a deal! Privacy sold separately.`);
    }

    // Habits roasts
    if (profile.habits === 'neither') {
        roasts.push(`🚭 Neither drinking nor smoking - Personality trait = Being boring? Is this the flex you think it is?`);
    }
    if (profile.habits === 'social') {
        roasts.push(`🍺 "Social drinker" - Sir/Ma'am, when relatives ask, what will you say? "Occasionally only, aunty ji"?`);
    }

    // Manglik roasts
    if (profile.manglik === 'yes') {
        roasts.push(`🔮 Manglik - Mars is angry at you. Solution? Find another angry Mars person. Science? Zero. Tradition? 100.`);
    }

    // Relocation roasts
    if (profile.relocate === 'no') {
        roasts.push(`✈️ Not willing to relocate - Beta, flexibility is also a virtue. Roots are good, but this is concrete.`);
    }

    // Requirements roasts
    const reqLower = profile.requirements.toLowerCase();
    if (reqLower.includes('homely') && reqLower.includes('modern')) {
        roasts.push(`📋 Wants "homely yet modern" - Schrödinger's bahu/dulha! Pick a lane, beta. Can't have both at maximum settings.`);
    }
    if (reqLower.includes('fair')) {
        roasts.push(`📋 "Fair complexion" in requirements - Colonial mindset called, wants its beauty standards back.`);
    }
    if (reqLower.includes('abroad') || reqLower.includes('settled abroad')) {
        roasts.push(`📋 "Settled abroad" mandatory - Green card > Love story. We respect the honesty though!`);
    }

    // Regional Roasts
    const locationLower = profile.location.toLowerCase();
    const cityKeys = Object.keys(COMMENTS_DATABASE.regionalRoasts);
    for (const city of cityKeys) {
        if (locationLower.includes(city)) {
            roasts.push(getRandom(COMMENTS_DATABASE.regionalRoasts[city]));
            break;
        }
    }

    // Default roasts if none triggered
    if (roasts.length === 0) {
        roasts.push(`✨ Surprisingly normal biodata! Are you sure you filled this correctly? This is too reasonable for arranged marriage!`);
    }

    return roasts;
}

function generateCompatibilityRoasts(profileA, profileB) {
    const roasts = [];

    // Age gap roasts
    const ageDiff = Math.abs(profileA.age - profileB.age);
    if (ageDiff >= 5) {
        roasts.push(`👫 Age gap of ${ageDiff} years - Generation gap or generation CANYON? Different Bollywood eras, different references!`);
    }
    if (profileA.age > profileB.age + 7) {
        roasts.push(`👴👧 ${profileA.name} is ${ageDiff} years older - Beta, different WhatsApp emoji usage alone will cause daily fights.`);
    }

    // Height compatibility
    const heightDiff = Math.abs(profileA.height - profileB.height);
    if (heightDiff > 0.6) {
        roasts.push(`📏 Height difference: ${heightDiff.toFixed(1)}ft - Wedding photos will need strategic camera angles. Or a step stool.`);
    }
    if (profileA.height < profileB.height && profileA.height > 0 && profileB.height > 0) {
        roasts.push(`📏 ${profileA.name} is shorter - Hope ego is flexible, because height differences in India = society has OPINIONS.`);
    }

    // Salary compatibility
    if (profileA.package > 0 && profileB.package > 0) {
        const salaryRatio = Math.max(profileA.package, profileB.package) / Math.min(profileA.package, profileB.package);
        if (salaryRatio > 2) {
            const higher = profileA.package > profileB.package ? profileA.name : profileB.name;
            roasts.push(`💰 Salary gap is MASSIVE - ${higher} earns 2x more. This isn't marriage, it's a merger & acquisition!`);
        }
    }

    // Salary expectations mismatch
    if (profileA.package < profileB.expectedSalary && profileB.expectedSalary > 0) {
        roasts.push(`💸 ${profileB.name} expects ₹${profileB.expectedSalary}L but ${profileA.name} earns ₹${profileA.package}L - Mathematics has left the chat.`);
    }
    if (profileB.package < profileA.expectedSalary && profileA.expectedSalary > 0) {
        roasts.push(`💸 ${profileA.name} expects ₹${profileA.expectedSalary}L but ${profileB.name} earns ₹${profileB.package}L - Expectations vs Reality: Bollywood edition!`);
    }

    // Family type clash
    if (profileA.familyType === 'joint' && profileB.familyType === 'nuclear') {
        roasts.push(`🏠 Joint family meets Nuclear family - Daily saas-bahu serial in making! Star Plus wants location rights.`);
    }

    // Location mismatch
    if (profileA.location && profileB.location && profileA.location !== profileB.location) {
        if (profileA.relocate === 'no' && profileB.relocate === 'no') {
            roasts.push(`📍 Both in different cities, neither willing to relocate - Long distance marriage? That's... innovative! Zoom wedding?`);
        }
    }

    // Both manglik
    if (profileA.manglik === 'yes' && profileB.manglik === 'yes') {
        roasts.push(`🔮 Both Manglik - Congratulations! You cancelled each other's Mars rage. Astrology = Advanced mathematics! 🧮`);
    }

    // Manglik vs non-manglik
    if ((profileA.manglik === 'yes' && profileB.manglik === 'no') || (profileA.manglik === 'no' && profileB.manglik === 'yes')) {
        roasts.push(`🔮 One Manglik, one not - Someone's doing a puja marathon before this wedding! Pandit ji already counting money.`);
    }

    // Habits mismatch
    if (profileA.habits === 'regular' && profileB.habits === 'neither') {
        roasts.push(`🍺 One drinks regularly, other is sanskaari - Every party will be a negotiation. "Just one peg, I promise!"`);
    }

    // Same boring hobbies
    if (profileA.hobbies.toLowerCase() === profileB.hobbies.toLowerCase() && profileA.hobbies.length > 10) {
        roasts.push(`🎭 Identical hobbies - Either soulmates or you both copy-pasted from Google. We're betting on option 2.`);
    }

    // Overall compatibility score
    const compatScore = calculateCompatScore(profileA, profileB);
    if (compatScore < 3) {
        roasts.push(`⚠️ Overall match: ${compatScore}/10 - This has the same energy as pineapple on pizza. Technically possible, but WHY?`);
    } else if (compatScore < 5) {
        roasts.push(`⚠️ Overall match: ${compatScore}/10 - Survivable with heavy couples therapy and selective hearing.`);
    } else if (compatScore < 7) {
        roasts.push(`✅ Overall match: ${compatScore}/10 - Not terrible! You might actually survive each other. Congratulations on being mediocre together!`);
    } else {
        roasts.push(`💚 Overall match: ${compatScore}/10 - Surprisingly compatible! Are you sure this is arranged marriage? Feels like love story!`);
    }

    return roasts;
}

function calculateCompatScore(a, b) {
    let score = 5; // Start neutral

    // Age compatibility
    const ageDiff = Math.abs(a.age - b.age);
    if (ageDiff <= 3) score += 1;
    if (ageDiff > 7) score -= 2;

    // Salary compatibility
    if (a.package > 0 && b.package > 0) {
        const ratio = Math.max(a.package, b.package) / Math.min(a.package, b.package);
        if (ratio < 1.5) score += 1;
        if (ratio > 3) score -= 1;
    }

    // Expectation vs reality
    if (a.expectedSalary > 0 && a.expectedSalary <= b.package * 1.2) score += 1;
    if (b.expectedSalary > 0 && b.expectedSalary <= a.package * 1.2) score += 1;
    if (a.expectedSalary > b.package * 2) score -= 1;
    if (b.expectedSalary > a.package * 2) score -= 1;

    // Family type
    if (a.familyType === b.familyType) score += 1;

    // Manglik
    if (a.manglik === b.manglik && a.manglik !== '') score += 1;

    // Relocation
    if (a.relocate === 'yes' || b.relocate === 'yes') score += 1;

    return Math.max(1, Math.min(10, score));
}

function displayResults(profileA, profileB, roastsA, roastsB, compatRoasts) {
    const scoreA = Math.max(1, 10 - roastsA.length);
    const scoreB = Math.max(1, 10 - roastsB.length);
    const compatScore = calculateCompatScore(profileA, profileB);

    const resultsHTML = `
        <!-- Profile A Results -->
        <div class="result-card profile-a">
            <h2 class="result-title" style="color: var(--primary);">
                🔥 ${profileA.name} - Individual Roast Report
            </h2>
            
            <div class="score-section">
                <h3>Dealbreaker Score</h3>
                <div class="score-meter">
                    <div class="score-fill" style="width: ${scoreA * 10}%">${scoreA}/10</div>
                </div>
            </div>

            <div class="roast-list">
                <h3 class="emoji">🚩 Red Flags Detected:</h3>
                ${roastsA.map(roast => `<div class="roast-item">${roast}</div>`).join('')}
            </div>

            <div class="savage-summary">
                <h3 class="emoji">💀 Savage Summary:</h3>
                <p>"${profileA.name} ${getSavageSummary(profileA, roastsA)}"</p>
            </div>
        </div>

        <!-- Profile B Results -->
        <div class="result-card profile-b">
            <h2 class="result-title" style="color: var(--secondary);">
                💥 ${profileB.name} - Individual Roast Report
            </h2>
            
            <div class="score-section">
                <h3>Dealbreaker Score</h3>
                <div class="score-meter">
                    <div class="score-fill" style="width: ${scoreB * 10}%">${scoreB}/10</div>
                </div>
            </div>

            <div class="roast-list">
                <h3 class="emoji">🚩 Red Flags Detected:</h3>
                ${roastsB.map(roast => `<div class="roast-item">${roast}</div>`).join('')}
            </div>

            <div class="savage-summary">
                <h3 class="emoji">💀 Savage Summary:</h3>
                <p>"${profileB.name} ${getSavageSummary(profileB, roastsB)}"</p>
            </div>
        </div>

        <!-- Compatibility Results -->
        <div class="result-card compatibility">
            <h2 class="result-title" style="color: var(--accent);">
                💑 Compatibility Analysis
            </h2>
            
            <div class="score-section">
                <h3>Match Score</h3>
                <div class="score-meter">
                    <div class="score-fill" style="width: ${compatScore * 10}%; background: var(--gradient-2);">${compatScore}/10</div>
                </div>
                <p style="margin-top: 1rem; font-style: italic;">
                    ${getCompatibilityLabel(compatScore)}
                </p>
            </div>

            <div class="roast-list">
                <h3 class="emoji">⚠️ What Could Go Wrong:</h3>
                ${compatRoasts.map(roast => `<div class="roast-item">${roast}</div>`).join('')}
            </div>

            <div class="savage-summary">
                <h3 class="emoji">💀 The Brutally Honest Take:</h3>
                <p>"${profileA.name} and ${profileB.name} have ${getHonestTake(compatScore)}"</p>
            </div>

            <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0,0,0,0.2); border-radius: 10px;">
                <h3 class="emoji">👨‍👩‍👧 Family Reaction Prediction:</h3>
                <p style="margin: 0.5rem 0;"><strong>His family:</strong> ${getHisFamilyReaction(profileA, profileB)}</p>
                <p style="margin: 0.5rem 0;"><strong>Her family:</strong> ${getHerFamilyReaction(profileA, profileB)}</p>
                <p style="margin: 0.5rem 0;"><strong>Astrologer:</strong> "Kundali says... I need ₹11,000 more to make it say yes." 💰</p>
            </div>
        </div>

        <div class="share-buttons">
            <button class="share-btn" onclick="copyResults()">📋 Copy Results</button>
            <button class="share-btn" onclick="downloadResults(this)" style="border-color: #6C63FF; color: #6C63FF;">📸 Download for Insta</button>
            <button class="share-btn" onclick="shareWhatsApp()">💬 Share on WhatsApp</button>
            <button class="share-btn" onclick="window.location.reload()">🔄 Roast Again</button>
        </div>
    `;

    document.getElementById('results').innerHTML = resultsHTML;
    document.getElementById('results').classList.add('active');

    // Trigger Effects based on score
    setTimeout(() => {
        if (compatScore >= 8) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#FF2E63', '#08D9D6', '#FFA500']
            });
        } else if (compatScore <= 3) {
            document.body.classList.add('shake');
            setTimeout(() => document.body.classList.remove('shake'), 500);
        }
    }, 500);
}

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getSavageSummary(profile, roasts) {
    if (roasts.length > 5) return getRandom(COMMENTS_DATABASE.savage.extreme);
    if (roasts.length > 3) return getRandom(COMMENTS_DATABASE.savage.moderate);
    return getRandom(COMMENTS_DATABASE.savage.chill);
}

function getCompatibilityLabel(score) {
    if (score >= 8) return "🦄 Unicorn Level - Shockingly Compatible!";
    if (score >= 6) return "✅ Decent Enough - Could Work with Effort";
    if (score >= 4) return "⚠️ Risky Business - Therapy Bills Incoming";
    if (score >= 2) return "🚩 Danger Zone - Run While You Can";
    return "💀 Disaster Movie - Netflix Should Document This";
}

function getHonestTake(score) {
    if (score >= 8) return getRandom(COMMENTS_DATABASE.honestTake.good);
    if (score >= 6) return getRandom(COMMENTS_DATABASE.honestTake.mid);
    return getRandom(COMMENTS_DATABASE.honestTake.bad);
}

function getHisFamilyReaction(a, b) {
    // Priority logic remains but adds randomness within it
    if (b.package > a.package * 1.5) return "\"Beta, she earns way more. Hope you're ready to be the trophy husband?\" 🏆";
    return getRandom(COMMENTS_DATABASE.reactions.hisFamily);
}

function getHerFamilyReaction(a, b) {
    if (a.familyType === 'joint') return "\"Joint family? Beta, we didn't raise a warrior to fight for the kitchen stove!\" ⚔️";
    return getRandom(COMMENTS_DATABASE.reactions.herFamily);
}

function copyResults() {
    const resultsText = document.getElementById('results').innerText;
    navigator.clipboard.writeText(resultsText).then(() => {
        alert('Results copied! Now go traumatize your friends! 😈');
    });
}

function shareWhatsApp() {
    alert('WhatsApp sharing coming soon! For now, screenshot and traumatize your group chats manually! 📱');
}

async function downloadResults(button) {
    const resultsElement = document.getElementById('results');
    button.innerText = '📸 Generating...';
    
    try {
        const canvas = await html2canvas(resultsElement, {
            backgroundColor: '#1A1A2E',
            scale: 2, // Higher quality
            logging: false,
            useCORS: true
        });
        
        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = `Biodata_Roast_${new Date().getTime()}.png`;
        link.href = image;
        link.click();
        button.innerText = '📸 Downloaded!';
    } catch (err) {
        console.error('Download failed:', err);
        button.innerText = '❌ Failed';
    } finally {
        setTimeout(() => button.innerText = '📸 Download for Insta', 2000);
    }
}
