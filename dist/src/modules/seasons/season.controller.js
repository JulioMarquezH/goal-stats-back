"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonController = void 0;
const common_1 = require("@nestjs/common");
const season_service_1 = require("./season.service");
let SeasonController = class SeasonController {
    constructor(seasonService) {
        this.seasonService = seasonService;
    }
    async getSeasons() {
        return this.seasonService.getAllSeasons();
    }
    async getSeasonById(id) {
        return this.seasonService.getSeasonById(parseInt(id));
    }
    async createSeason(data) {
        return this.seasonService.createSeason(data);
    }
    async updateSeason(id, data) {
        return this.seasonService.updateSeason(parseInt(id), data);
    }
    async deleteSeason(id) {
        return this.seasonService.deleteSeason(parseInt(id));
    }
};
exports.SeasonController = SeasonController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeasonController.prototype, "getSeasons", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeasonController.prototype, "getSeasonById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SeasonController.prototype, "createSeason", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], SeasonController.prototype, "updateSeason", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SeasonController.prototype, "deleteSeason", null);
exports.SeasonController = SeasonController = __decorate([
    (0, common_1.Controller)('seasons'),
    __metadata("design:paramtypes", [season_service_1.SeasonService])
], SeasonController);
//# sourceMappingURL=season.controller.js.map