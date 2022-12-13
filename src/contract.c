#include "squid_plugin.h"

// Need more information about the interface for plugins? Please read the README.md!

// You can check <Plugin Contract Name> methods here
// link:  <Plugin Contract Link>
//

// callBridgeCall : 0x8ca3bf68
static const uint8_t SQUID_CALL_BRIDGE_CALL_SELECTOR[SELECTOR_SIZE] = {0x8c, 0xa3, 0xbf, 0x68};

// bridgeCall : 0x3c659741
static const uint8_t SQUID_BRIDGE_CALL_SELECTOR[SELECTOR_SIZE] = {0x3c, 0x65, 0x97, 0x41};

// Array of all the different Squid selectors.
const uint8_t *const SQUID_SELECTORS[NUM_SQUID_SELECTORS] = {SQUID_CALL_BRIDGE_CALL_SELECTOR,
                                                             SQUID_BRIDGE_CALL_SELECTOR};

// Ask dummy address ETH
// Remove if not used
const uint8_t PLUGIN_ETH_ADDRESS[ADDRESS_LENGTH] = {0xee, 0xee, 0xee, 0xee, 0xee, 0xee, 0xee,
                                                    0xee, 0xee, 0xee, 0xee, 0xee, 0xee, 0xee,
                                                    0xee, 0xee, 0xee, 0xee, 0xee, 0xee};

// Remove if not used
const uint8_t NULL_ETH_ADDRESS[ADDRESS_LENGTH] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                                                  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                                                  0x00, 0x00, 0x00, 0x00, 0x00, 0x00};

const char SQUID_SUPPORTED_CHAINS[NUM_SUPPORTED_CHAINS][PARAMETER_LENGTH] = {"Ethereum",
                                                                             "Polygon",
                                                                             "BSC"};

const struct tokenSymbolToDecimals_t SQUID_SUPPORTED_TOKENS[NUM_SUPPORTED_TOKENS] = {{"USDC", 6},
                                                                                     {"Test", 7}};