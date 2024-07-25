function netherRealms(input) {
  const demons = input.split(/\s*,\s*/).filter(Boolean);
  const demonStats = [];

  demons.forEach((demon) => {
    let health = 0;
    let damage = 0;
    const healthPattern = /[^\d\+\-\*\/\.]/g;
    const damagePattern = /[-+]?\d+(\.\d+)?/g;
    const modifiersPattern = /[\*\/]/g;

    // Calculate health
    const healthMatches = demon.match(healthPattern);
    if (healthMatches) {
      health = healthMatches.reduce((acc, char) => acc + char.charCodeAt(0), 0);
    }

    // Calculate base damage
    const damageMatches = demon.match(damagePattern);
    if (damageMatches) {
      damage = damageMatches.reduce((acc, num) => acc + parseFloat(num), 0);
    }

    // Apply modifiers
    const modifiers = demon.match(modifiersPattern);
    if (modifiers) {
      modifiers.forEach((mod) => {
        if (mod === "*") {
          damage *= 2;
        } else if (mod === "/") {
          damage /= 2;
        }
      });
    }

    demonStats.push({ name: demon, health, damage });
  });

  // Sort demons alphabetically
  demonStats.sort((a, b) => a.name.localeCompare(b.name));

  // Print the results
  demonStats.forEach((demon) => {
    console.log(
      `${demon.name} - ${demon.health} health, ${demon.damage.toFixed(
        2
      )} damage`
    );
  });
}

// Example usage:
const input1 = "M3ph-0.5s-0.5t0.0**, Azazel";
const input2 = "Gos/ho";
const input3 = "M3ph-0.5s-0.5t0.0**";

netherRealms(input1);
// Expected Output:
// Azazel - 615 health, 0.00 damage
// M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage

netherRealms(input2);
// Expected Output:
// Gos/ho - 512 health, 0.00 damage

netherRealms(input3);
// Expected Output:
// M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage
